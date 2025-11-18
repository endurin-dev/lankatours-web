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
  icon: unknown; 
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


{/* OUR TOP TOUR PACKAGES – PROFESSIONAL CORPORATE STYLE (NO GLASS) */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-6 max-w-7xl">
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
        Our Top Tour Packages
      </h2>
      <p className="text-lg text-gray-600">
        Curated experiences • Private transfers • Best value in Sri Lanka
      </p>
    </div>

    {/* 6 Cards Grid – Clean & Professional */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* CARD 1 – Sigiriya */}
 <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
   <div className="relative h-64">
     <Image
       src="/tours/sigiriya.webp"
       alt="Sigiriya Rock Fortress"
       fill
       className="object-cover"
     />
     <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
       BEST SELLER
     </div>
   </div>
   <div className="p-6">
     <h3 className="text-xl font-bold text-gray-900 mb-2">
       Sigiriya Rock & Village Experience
     </h3>
     <p className="text-sm text-gray-600 mb-5 leading-relaxed">
       Ancient rock fortress, village cart ride, traditional lunch
     </p>
     <div className="flex items-center justify-between">
       <div>
         <p className="text-3xl font-bold text-green-600">LKR 22,900</p>
         <p className="text-xs text-gray-500">per person</p>
       </div>
       <Link
         href="/tours/sigiriya"
         className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium text-sm rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
       >
         View Details →
       </Link>
     </div>
   </div>
 </div>

 {/* CARD 2 – Yala */}
 <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
   <div className="relative h-64">
     <Image src="/tours/yala.webp" alt="Yala Safari" fill className="object-cover" />
   </div>
   <div className="p-6">
     <h3 className="text-xl font-bold text-gray-900 mb-2">Yala National Park Safari</h3>
     <p className="text-sm text-gray-600 mb-5">Private jeep • Leopard spotting • Breakfast included</p>
     <div className="flex items-center justify-between">
       <div>
         <p className="text-3xl font-bold text-green-600">LKR 19,900</p>
         <p className="text-xs text-gray-500">per person</p>
       </div>
       <Link href="/tours/yala" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium text-sm rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
         View Details →
       </Link>
     </div>
   </div>
 </div>

 {/* CARD 3 – Kandy */}
 <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
   <div className="relative h-64">
     <Image src="/tours/kandy.webp" alt="Kandy Tour" fill className="object-cover" />
     <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
       LIMITED OFFER
     </div>
   </div>
   <div className="p-6">
     <h3 className="text-xl font-bold text-gray-900 mb-2">Kandy Cultural Day Tour</h3>
     <p className="text-sm text-gray-600 mb-5">Temple of the Tooth • Cultural show • Spice garden</p>
     <div className="flex items-center justify-between">
       <div>
         <del className="text-sm text-gray-500">LKR 18,000</del>
         <p className="text-3xl font-bold text-green-600">LKR 14,900</p>
         <p className="text-xs text-gray-500">per person</p>
       </div>
       <Link href="/tours/kandy" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium text-sm rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
         View Details →
       </Link>
     </div>
   </div>
 </div>

 {/* CARD 4 – Ella */}
 <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
   <div className="relative h-64">
     <Image src="/tours/ella.webp" alt="Ella Train" fill className="object-cover" />
   </div>
   <div className="p-6">
     <h3 className="text-xl font-bold text-gray-900 mb-2">Ella Scenic Train Journey</h3>
     <p className="text-sm text-gray-600 mb-5">Nine Arch Bridge • Tea estates • Little Adam’s Peak</p>
     <div className="flex items-center justify-between">
       <div>
         <p className="text-3xl font-bold text-green-600">LKR 16,900</p>
         <p className="text-xs text-gray-500">per person</p>
       </div>
       <Link href="/tours/ella" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium text-sm rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
         View Details →
       </Link>
     </div>
   </div>
 </div>

 {/* CARD 5 – Whale Watching */}
 <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
   <div className="relative h-64">
     <Image src="/tours/whale.webp" alt="Whale Watching" fill className="object-cover" />
   </div>
   <div className="p-6">
     <h3 className="text-xl font-bold text-gray-900 mb-2">Mirissa Whale Watching</h3>
     <p className="text-sm text-gray-600 mb-5">Blue whales • Dolphins • Breakfast on boat</p>
     <div className="flex items-center justify-between">
       <div>
         <p className="text-3xl font-bold text-green-600">LKR 21,500</p>
         <p className="text-xs text-gray-500">per person</p>
       </div>
       <Link href="/tours/whale" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium text-sm rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
         View Details →
       </Link>
     </div>
   </div>
 </div>

 {/* CARD 6 – Galle */}
 <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
   <div className="relative h-64">
     <Image src="/tours/galle.webp" alt="Galle Fort" fill className="object-cover" />
   </div>
   <div className="p-6">
     <h3 className="text-xl font-bold text-gray-900 mb-2">Galle Fort & South Coast</h3>
     <p className="text-sm text-gray-600 mb-5">UNESCO site • Turtle hatchery • stilt fishermen</p>
     <div className="flex items-center justify-between">
       <div>
         <p className="text-3xl font-bold text-green-600">LKR 17,900</p>
         <p className="text-xs text-gray-500">per person</p>
       </div>
       <Link href="/tours/galle" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium text-sm rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
         View Details →
       </Link>
     </div>
   </div>
 </div>

    </div>

    {/* View All Button */}
    <div className="text-center mt-16">
      <Link
        href="/tours"
        className="inline-block px-10 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
      >
        View All Tour Packages →
      </Link>
    </div>
  </div>
</section>


{/* PHOTO GALLERY – Creative Asymmetric Layout */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-6 max-w-7xl">
    {/* Section Title */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Explore Sri Lanka Through Our Lens
      </h2>
      <p className="text-lg text-gray-600">
        Real moments • Happy travelers • Unforgettable experiences
      </p>
    </div>

    {/* Creative 10-Image Grid – Asymmetric & Beautiful */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]">

      {/* Image 1 – Tall */}
      <div className="row-span-2 relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group">
        <Image
          src="/gallery/1.webp"
          alt="Happy family at Sigiriya"
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Image 2 */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all group">
        <Image src="/gallery/2.webp" alt="Airport pickup" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
      </div>

      {/* Image 3 */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all group">
        <Image src="/gallery/3.webp" alt="Yala leopard safari" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
      </div>

      {/* Image 4 – Wide */}
      <div className="md:col-span-2 relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all group">
        <Image src="/gallery/4.webp" alt="Ella train journey" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
      </div>

      {/* Image 5 */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all group">
        <Image src="/gallery/5.webp" alt="Whale watching" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
      </div>

      {/* Image 6 – Tall */}
      <div className="row-span-2 relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all group">
        <Image src="/gallery/6.webp" alt="Galle Fort sunset" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
      </div>

      {/* Image 7 */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all group">
        <Image src="/gallery/7.webp" alt="Kandy Temple" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
      </div>

      {/* Image 8 – Wide */}
      <div className="md:col-span-2 relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all group">
        <Image src="/gallery/8.webp" alt="Beach transfer" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
      </div>

      {/* Image 9 */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all group">
        <Image src="/gallery/9.webp" alt="Smiling driver" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
      </div>

      {/* Image 10 */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all group">
        <Image src="/gallery/10.webp" alt="Customer review moment" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
      </div>
 {/* Image 11 */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all group">
        <Image src="/gallery/11.webp" alt="facy shop" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
      </div>
   
    </div>
    {/* View Full Gallery Button */}
    <div className="text-center mt-12">
      <Link
        href="/gallery"
        className="inline-flex items-center gap-4 px-10 py-5 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-400 hover:scale-105"
      >
        View Full Gallery <ArrowRight className="w-7 h-7" />
      </Link>
    </div>
  </div>
</section>



{/* REVIEWS SECTION – TripAdvisor & Google Reviews Integration */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-6 max-w-7xl">
    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        What Our Travelers Say
      </h2>
      <p className="text-lg text-gray-600">
        Trusted by thousands • 5/5 on TripAdvisor • 4.9/5 on Google
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* TripAdvisor Reviews */}
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <div className="flex items-center gap-4 mb-6">
          <Image src="/partners/tripadvisor-logo.png" alt="TripAdvisor" width={120} height={50} className="object-contain" />
          <div>
            <p className="text-3xl font-bold text-gray-900">5/5</p>
            <p className="text-sm text-gray-600">Overall Rating (New Listing)</p>
            <p className="text-xs text-gray-500">No reviews yet – Be the first to share your experience!</p>
          </div>
        </div>
        {/* Embed TripAdvisor Widget – Replace with actual embed code */}
        <div className="bg-gray-100 rounded-xl p-4 text-center">
          <p className="text-sm text-gray-500 italic mb-4">TripAdvisor Reviews Loading...</p>
          {/* Actual Embed Code (get from TripAdvisor) */}
          <iframe
            src="https://www.tripadvisor.com/Attraction_Review-g297896-d20911258-Reviews-Lanka_tours_transfers-Galle_Galle_District_Southern_Province.html#REVIEWS"
            className="w-full h-48 rounded-lg border-0"
            title="TripAdvisor Reviews"
          />
          <Link href="https://www.tripadvisor.com/Attraction_Review-g297896-d20911258-Reviews-Lanka_tours_transfers-Galle_Galle_District_Southern_Province.html" className="text-green-600 hover:text-green-700 font-semibold text-sm">
            Read All Reviews on TripAdvisor →
          </Link>
        </div>
      </div>

      {/* Google Reviews */}
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">G</span>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">4.9/5</p>
            <p className="text-sm text-gray-600">300+ Reviews</p>
          </div>
        </div>
        {/* Sample Google Reviews – Replace with Embed Widget */}
        <div className="space-y-4 mb-6">
          {/* Review 1 */}
          <div className="flex gap-3">
            <div className="flex gap-0.5 text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <div>
              <p className="font-semibold text-sm">John D. – Nov 15, 2025</p>
              <p className="text-sm text-gray-700">&quot;Excellent airport transfer! Driver was punctual and friendly. Highly recommend for first-time visitors.&quot;</p>
            </div>
          </div>
          {/* Review 2 */}
          <div className="flex gap-3">
            <div className="flex gap-0.5 text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <div>
              <p className="font-semibold text-sm">Sarah K. – Nov 10, 2025</p>
              <p className="text-sm text-gray-700">&quot;Smooth Yala safari booking. Saw leopards! Professional service from start to finish.&quot;</p>
            </div>
          </div>
          {/* Review 3 */}
          <div className="flex gap-3">
            <div className="flex gap-0.5 text-yellow-400">
              {[...Array(4)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              <Star className="w-4 h-4 text-gray-300 fill-gray-300" />
            </div>
            <div>
              <p className="font-semibold text-sm">Mike L. – Nov 5, 2025</p>
              <p className="text-sm text-gray-700">&quot;Great value for money. Hotel booking was easy and got 25% off as promised.&quot;</p>
            </div>
          </div>
        </div>
        {/* Google Reviews Widget Embed – Replace with actual */}
        <div className="bg-gray-100 rounded-xl p-4 text-center">
          <p className="text-sm text-gray-500 italic mb-4">Google Reviews Loading...</p>
          {/* Actual Google Embed Code */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15858.000000000!2d80.000000000!3d7.000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDEnMDAuMCJOIDgwwrAwMCcwMC4wIkU!5e0!3m2!1sen!2slk!4v1730000000000"
            className="w-full h-48 rounded-lg border-0"
            title="Google Reviews"
          />
          <Link href="https://www.google.com/search?q=Lanka+Tours+and+Transfers" className="text-green-600 hover:text-green-700 font-semibold text-sm">
            Leave a Review on Google →
          </Link>
        </div>
      </div>
    </div>

    {/* CTA Button */}
    <div className="text-center mt-16">
      <Link
        href="/contact"
        className="inline-flex items-center gap-4 px-12 py-5 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
      >
        Share Your Story <ArrowRight className="w-7 h-7" />
      </Link>
    </div>
  </div>
</section>







    </>
  );
}