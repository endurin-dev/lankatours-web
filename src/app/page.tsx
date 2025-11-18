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
  className="
    relative inline-flex items-center justify-center gap-3
    px-10 py-5 rounded-2xl text-lg md:text-xl font-bold text-white
    bg-white/10 backdrop-blur-xl border border-white/30
    shadow-2xl shadow-black/20
    overflow-hidden
    transition-all duration-500 ease-out
    hover:bg-white/20 hover:border-white/50 hover:shadow-3xl hover:shadow-black/30
    hover:scale-105 active:scale-95
    group
  "
>
  {/* Inner Glow Effect */}
  <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
  
  {/* Subtle Bottom Highlight (iPhone style) */}
  <span className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/20 to-transparent opacity-40" />

  {/* Text + Icon */}
  <span className="relative z-10 flex items-center gap-3">
    Book Airport Transfer 
    <ArrowRight className="w-7 h-7 transition-transform duration-300 group-hover:translate-x-2" />
  </span>
</Link>
        <Link
  href="/contact"
  className="
    relative inline-flex items-center justify-center
    px-10 py-5 rounded-2xl text-lg md:text-xl font-bold text-white
    /* Green Glass Background */
    bg-gradient-to-br from-green-500/30 to-emerald-600/40
    backdrop-blur-xl
    border border-white/40
    /* 3D Glass Effect */
    shadow-2xl shadow-green-900/40
    /* Inner Shine (iPhone style) */
    before:absolute before:inset-0 before:bg-gradient-to-t before:from-white/20 before:via-transparent before:to-transparent before:opacity-60
    /* Hover Glow */
    hover:from-green-500/40 hover:to-emerald-600/50 hover:border-white/60 hover:shadow-3xl hover:shadow-green-900/50
    hover:scale-105 active:scale-95
    transition-all duration-500 ease-out
    overflow-hidden
    group
  "
>
  {/* Subtle top highlight */}
  <span className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/30 to-transparent opacity-50" />
  
  {/* Button Text */}
  <span className="relative z-10">
    Get Quote
  </span>
</Link>
      </div>
    </div>
  </div>
</section>


{/* INFORMATION PARTNERS – Auto-Scrolling Slider Strip */}
<section className="py-14 bg-white border-y border-gray-100">
  <div className="container mx-auto px-6">
   <p className="text-center text-gray-900 text-sm md:text-base font-semibold tracking-wider mb-10">
      Cooperate Working With
    </p>

    {/* Infinite Horizontal Scroll */}
    <div className="overflow-hidden">
      <div className="flex animate-[slide_30s_linear_infinite] items-center gap-16 md:gap-24">
        {/* Your 7 Real Partner Logos – Repeat twice for seamless loop */}
        {[
          "/partners/bluenote-logo.jpg",
          "/partners/tripadvisor-logo.png",
          "/partners/GetYourGuide_Logo.jpg",
          "/partners/Booking-logo.png",
          "/partners/Agoda_logo.png",
          "/partners/avawia_logo.png",
          "/partners/chenda_logo.jpeg",
          // Repeat for smooth infinite scroll
          "/partners/bluenote-logo.jpg",
          "/partners/tripadvisor-logo.png",
          "/partners/GetYourGuide_Logo.jpg",
          "/partners/Booking-logo.png",
          "/partners/Agoda_logo.png",
          "/partners/avawia_logo.png",
          "/partners/chenda_logo.jpeg",
        ].map((src, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={src}
              alt="Trusted Partner"
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