// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import {
  Plane, Building2, DollarSign, Compass, Waves, Bike,
  ShoppingBag, Sparkles, ArrowRight, Star, Shield,
  Clock, CreditCard, Phone
} from 'lucide-react';

// Reusable Service Card – Clean & Professional
function ServiceCard({ 
  title, 
  icon: Icon, 
  badge, 
  description 
}: { 
  title: string; 
  icon: any; 
  badge?: string; 
  description: string;
}) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 p-8 text-center h-full flex flex-col justify-center">
      {badge && (
        <div className={`absolute -top-3 -right-3 px-4 py-1 rounded-full text-white text-xs font-bold shadow-md ${
          badge === "25% OFF" ? "bg-orange-600" : "bg-green-600"
        }`}>
          {badge}
        </div>
      )}
      <div className="w-20 h-20 mx-auto bg-green-100 rounded-2xl flex items-center justify-center mb-6">
        <Icon className="w-12 h-12 text-green-700" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-xs md:text-sm text-gray-600 leading-tight">
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <>
{/* HERO SECTION – Content Perfectly at Bottom (Mobile & Desktop) */}
<section className="relative h-screen min-h-[600px] flex flex-col justify-end text-white">
  <Image
    src="/images/hero-banner.webp"
    alt="Lanka Tours and Transfers - Sri Lanka Travel"
    fill
    priority
    className="object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

  <div className="relative z-10 pb-16 md:pb-24 px-6">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
        Travel Sri Lanka with<br />
        Lanka Tours & Transfers
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl mb-10 font-light max-w-3xl mx-auto opacity-95">
        Your Trusted Travel Partner in Sri Lanka Since 2020
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <Link
          href="/transfers"
          className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-lg text-lg md:text-xl font-bold flex items-center justify-center gap-3 shadow-xl transition"
        >
          Book Airport Transfer <ArrowRight className="w-6 h-6" />
        </Link>
        <Link
          href="/contact"
          className="bg-white text-green-700 hover:bg-gray-100 px-10 py-5 rounded-lg text-lg md:text-xl font-bold border-2 border-white transition"
        >
          Get Quote
        </Link>
      </div>
    </div>
  </div>
</section>

{/* SERVICE GRID – With SEO Descriptions (As per Quotation) */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-6 max-w-7xl">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        All Your Travel Needs Covered in One Place
      </h2>
      <p className="text-lg text-gray-600">
        Licensed by Sri Lanka Tourism Authority • Trusted by thousands of travelers
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-start">
      {/* BIG MAIN CARD */}
      <div className="col-span-2 row-span-2">
        <div className="bg-green-600 text-white rounded-2xl shadow-xl p-12 text-center h-full flex flex-col justify-center hover:shadow-2xl transition-shadow">
          <div className="w-28 h-28 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Plane className="w-20 h-20" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Airport & Hotel Transfers
          </h3>
          <p className="text-sm md:text-base opacity-90 mb-4">
          Arrive in Sri Lanka stress-free with our premium Colombo Airport (CMB) transfers. Reliable taxi, private luxury & family-friendly services with baby seats. Your holiday begins the moment we meet you!

Skip the queues and travel directly to your hotel in a safe, comfortable, and air-conditioned vehicle. We serve all major destinations, from the beaches of Negombo to the cultural heart of Kandy.

Book your airport transfer today and secure your seamless start to paradise
          </p>
          <span className="inline-block bg-white/20 px-6 py-2 rounded-full font-semibold">
            MOST POPULAR SERVICE
          </span>
        </div>
      </div>

      {/* SMALL CARDS WITH SEO DESCRIPTIONS */}
      <ServiceCard 
        title="Hotel Booking" 
        icon={Building2} 
        badge="25% OFF"
        description="Best hotel rates in Sri Lanka, instant confirmation, free cancellation"
      />
      <ServiceCard 
        title="Currency Exchange" 
        icon={DollarSign} 
        badge="BEST RATE"
        description="Airport & city exchange, no commission, best rates guaranteed"
      />
      <ServiceCard 
        title="Excursions & Tours" 
        icon={Compass}
        description="Sigiriya, Yala Safari, Kandy Temple, whale watching, custom tours"
      />
      <ServiceCard 
        title="Surf Camp & Lessons" 
        icon={Waves}
        description="Arugam Bay, Weligama, beginner to pro, board rental included"
      />
      <ServiceCard 
        title="Scooter & Bike Rental" 
        icon={Bike}
        description="From LKR 2,000/day, insurance, helmet, island-wide delivery"
      />
      <ServiceCard 
        title="Gift & Handicraft Shop" 
        icon={ShoppingBag}
        description="Genuine Ceylon tea, gems, souvenirs, worldwide shipping"
      />
      <ServiceCard 
        title="Train, Safari & More" 
        icon={Sparkles}
        description="Train tickets, Yala/ Udawalawe safari, visa extension, diving"
      />
    </div>
  </div>
</section>






    </>
  );
}