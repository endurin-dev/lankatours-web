// src/app/transfers/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Car, Users, Baby, Wifi, Clock, Calendar, MapPin } from 'lucide-react';

const locations = [
  'Bandaranaike International Airport (CMB)',
  'Colombo City Center',
  'Negombo',
  'Kandy',
  'Galle',
  'Bentota',
  'Hikkaduwa',
  'Sigiriya / Dambulla',
  'Ella',
  'Mirissa',
  'Yala National Park',
  'Nuwara Eliya',
  'Anuradhapura',
  'Trincomalee',
  'Tangalle',
  'Arugam Bay',
  'Other (please specify)',
];

const vehicleTypes = [
  { name: 'Sedan', pax: '1-3 passengers', baseFare: 3500, ratePerKm: 120 },
  { name: 'Van', pax: '4-8 passengers', baseFare: 5000, ratePerKm: 180 },
  { name: 'Mini Bus', pax: '9-15 passengers', baseFare: 8000, ratePerKm: 250 },
  { name: 'Luxury Car', pax: '1-3 passengers (Premium)', baseFare: 12000, ratePerKm: 300 },
];

// Real distance matrix (in KM) – accurate pricing
const distanceMap: Record<string, number> = {
  'Bandaranaike International Airport (CMB)-Negombo': 12,
  'Bandaranaike International Airport (CMB)-Colombo City Center': 35,
  'Bandaranaike International Airport (CMB)-Kandy': 115,
  'Bandaranaike International Airport (CMB)-Galle': 140,
  'Bandaranaike International Airport (CMB)-Bentota': 95,
  'Bandaranaike International Airport (CMB)-Hikkaduwa': 120,
  'Bandaranaike International Airport (CMB)-Sigiriya / Dambulla': 165,
  'Bandaranaike International Airport (CMB)-Ella': 225,
  'Bandaranaike International Airport (CMB)-Mirissa': 170,
  'Bandaranaike International Airport (CMB)-Yala National Park': 280,
  'Bandaranaike International Airport (CMB)-Nuwara Eliya': 165,
  'Bandaranaike International Airport (CMB)-Anuradhapura': 195,
  'Bandaranaike International Airport (CMB)-Trincomalee': 265,
  'Bandaranaike International Airport (CMB)-Tangalle': 200,
  'Bandaranaike International Airport (CMB)-Arugam Bay': 320,
};

const getDistance = (from: string, to: string): number => {
  if (!from || !to || from === to) return 0;
  const key1 = `${from}-${to}`;
  const key2 = `${to}-${from}`;
  return distanceMap[key1] || distanceMap[key2] || 150; // fallback
};

export default function TransfersPage() {
  const [from, setFrom] = useState('Bandaranaike International Airport (CMB)');
  const [to, setTo] = useState('');
  const [otherFrom, setOtherFrom] = useState('');
  const [otherTo, setOtherTo] = useState('');
  const [vehicle, setVehicle] = useState(vehicleTypes[0]);
  const [passengers, setPassengers] = useState('1');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [babySeat, setBabySeat] = useState('No');
  const [extras, setExtras] = useState({ wifi: false, water: false, waiting: false });
  const [fare, setFare] = useState<number | null>(null);

  // Booking form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [message, setMessage] = useState('');

  const calculateFare = () => {
    const finalFrom = from === 'Other (please specify)' ? otherFrom : from;
    const finalTo = to === 'Other (please specify)' ? otherTo : to;

    if (!finalFrom || !finalTo || finalFrom === finalTo) {
      setFare(null);
      return;
    }

    const distance = getDistance(finalFrom, finalTo);
    if (distance === 0) {
      setFare(null);
      return;
    }

    let total = vehicle.baseFare + (distance * vehicle.ratePerKm);

    if (babySeat === 'Yes') total += 1500;
    if (extras.wifi) total += 1000;
    if (extras.water) total += 500;
    if (extras.waiting) total += 2000;

    setFare(Math.round(total));
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const bookingDetails = `
Booking Confirmed!
Route: ${from} → ${to}
Vehicle: ${vehicle.name}
Total Fare: LKR ${fare?.toLocaleString()}
Pickup: ${pickupDate} at ${pickupTime}
Name: ${name}
WhatsApp: ${whatsapp || phone}
    `.trim();

    alert(bookingDetails + '\n\nWe will contact you on WhatsApp within 5 minutes!');
    // Real project: send to backend/email + Stripe
  };

  return (
    <>


{/* SEO-Optimized Hero with Rich Service Descriptions */}
<section className="bg-white pt-32 pb-20 md:pt-40 md:pb-28">
  <div className="container mx-auto px-6 max-w-7xl">

    {/* Headline */}
    <div className="text-center mb-14 md:mb-16">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
        Airport & Hotel Transfers Sri Lanka
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 mt-3 md:mt-4 max-w-4xl mx-auto leading-snug">
        Private • Safe • Comfortable • Fixed Prices • 24/7 Available
      </p>
      <p className="text-lg md:text-xl text-gray-600 mt-2 md:mt-3 leading-snug">
        From Colombo Airport (CMB) or Any Hotel – Island-wide Coverage
      </p>
    </div>

    {/* SEO-Rich Services Grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10">

      {/* 1. 24/7 Service */}
      <div className="group text-center transform transition-all duration-300 hover:scale-110">
        <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-5 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="font-bold text-gray-800 text-sm md:text-base">24/7 Airport Transfers</h3>
        <p className="text-xs md:text-sm text-gray-600 mt-1 leading-tight">
          Available round-the-clock for early arrivals, late flights, or midnight transfers across Sri Lanka
        </p>
      </div>

      {/* 2. No Hidden Fees */}
      <div className="group text-center transform transition-all duration-300 hover:scale-110">
        <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-5 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="font-bold text-gray-800 text-sm md:text-base">Fixed Price Guarantee</h3>
        <p className="text-xs md:text-sm text-gray-600 mt-1 leading-tight">
          Transparent pricing – no surge, no meter, no extra charges even during peak tourist season
        </p>
      </div>

      {/* 3. Meet & Greet */}
      <div className="group text-center transform transition-all duration-300 hover:scale-110">
        <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-5 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <h3 className="font-bold text-gray-800 text-sm md:text-base">Personal Meet & Greet</h3>
        <p className="text-xs md:text-sm text-gray-600 mt-1 leading-tight">
          Driver waits with your name board at Bandaranaike International Airport arrivals hall
        </p>
      </div>

      {/* 4. Door-to-Door Service */}
      <div className="group text-center transform transition-all duration-300 hover:scale-110">
        <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-5 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>
        <h3 className="font-bold text-gray-800 text-sm md:text-base">Door-to-Door Delivery</h3>
        <p className="text-xs md:text-sm text-gray-600 mt-1 leading-tight">
          Direct transfer to your hotel in Colombo, Kandy, Galle, Bentota, Sigiriya, Ella & beyond
        </p>
      </div>

      {/* 5. Flight Monitoring */}
      <div className="group text-center transform transition-all duration-300 hover:scale-110">
        <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-5 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
        <h3 className="font-bold text-gray-800 text-sm md:text-base">Real-Time Flight Tracking</h3>
        <p className="text-xs md:text-sm text-gray-600 mt-1 leading-tight">
          We track your flight and adjust pickup time automatically – no stress if delayed
        </p>
      </div>

      {/* 6. Free Cancellation */}
      <div className="group text-center transform transition-all duration-300 hover:scale-110">
        <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-5 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="font-bold text-gray-800 text-sm md:text-base">Free Cancellation</h3>
        <p className="text-xs md:text-sm text-gray-600 mt-1 leading-tight">
          Cancel up to 24 hours before your Sri Lanka airport transfer – full refund, no questions
        </p>
      </div>

    </div>

    {/* Scroll CTA */}
    <div className="text-center mt-16">
      <p className="text-2xl md:text-3xl font-bold text-gray-800">
        Get Instant Quote in 10 Seconds
      </p>
      <div className="inline-flex items-center mt-4">
        <div className="h-1 w-32 bg-green-600 rounded-full"></div>
        <span className="mx-5 text-green-600 font-bold text-xl">Scroll Down</span>
        <div className="h-1 w-32 bg-green-600 rounded-full"></div>
      </div>
    </div>

  </div>
</section>






{/* Main Booking Calculator */}
<section className="py-16 md:py-24 bg-gray-50">
  <div className="container mx-auto px-6 max-w-7xl">
    {/* Header */}
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Get Instant Transfer Price & Book Now
      </h2>
      <p className="text-xl text-gray-600">
        Real-time pricing • No hidden charges • Book in 60 seconds
      </p>
    </div>

    {/* Main Card */}
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr]">

        {/* LEFT SIDE – Step-by-Step Guide (Desktop only, pure white text) */}
        <div className="hidden lg:block bg-gradient-to-b from-green-700 to-green-800 text-white p-12">
          <h3 className="text-4xl font-bold mb-14 text-white">Easy 3-Step Booking</h3>
          
          <ol className="relative space-y-20 before:absolute before:left-9 before:top-20 before:bottom-20 before:w-0.5 before:bg-white/40">
            <li className="relative pl-24">
              <span className="absolute left-0 top-1 w-18 h-18 bg-white text-green-700 rounded-full flex items-center justify-center text-3xl font-bold shadow-xl">1</span>
              <h4 className="text-2xl font-bold mb-3 text-white">Select Your Journey</h4>
              <p className="text-lg leading-relaxed text-white/95">Pickup & drop-off locations, date, time, passengers & extras</p>
            </li>
            <li className="relative pl-24">
              <span className="absolute left-0 top-1 w-18 h-18 bg-white text-green-700 rounded-full flex items-center justify-center text-3xl font-bold shadow-xl">2</span>
              <h4 className="text-2xl font-bold mb-3 text-white">Review & Calculate</h4>
              <p className="text-lg leading-relaxed text-white/95">See your full selection summary and instant fixed price</p>
            </li>
            <li className="relative pl-24">
              <span className="absolute left-0 top-1 w-18 h-18 bg-white text-green-700 rounded-full flex items-center justify-center text-3xl font-bold shadow-xl">3</span>
              <h4 className="text-2xl font-bold mb-3 text-white">Book & Relax</h4>
              <p className="text-lg leading-relaxed text-white/95">We confirm via call/WhatsApp in ≤5 minutes – done!</p>
            </li>
          </ol>
        </div>

        {/* RIGHT SIDE – Form (All text BLACK) */}
        <div className="p-8 md:p-12 lg:p-16 text-black">
          
          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

            {/* Pickup */}
            <div>
              <label className="block text-lg font-semibold mb-3">Pickup Location</label>
              <select value={from} onChange={(e) => setFrom(e.target.value)} className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:border-green-600 focus:ring-4 focus:ring-green-100 text-black" required>
                {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
              {from === 'Other (please specify)' && (
                <input type="text" placeholder="Enter pickup location" value={otherFrom} onChange={(e) => setOtherFrom(e.target.value)} className="w-full mt-4 px-5 py-4 border-2 border-gray-300 rounded-xl text-black" required />
              )}
            </div>

            {/* Drop-off */}
            <div>
              <label className="block text-lg font-semibold mb-3">Drop-off Location</label>
              <select value={to} onChange={(e) => setTo(e.target.value)} className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:border-green-600 focus:ring-4 focus:ring-green-100 text-black" required>
                <option value="">Select destination</option>
                {locations.filter(l => l !== from).map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
              {to === 'Other (please specify)' && (
                <input type="text" placeholder="Enter drop-off location" value={otherTo} onChange={(e) => setOtherTo(e.target.value)} className="w-full mt-4 px-5 py-4 border-2 border-gray-300 rounded-xl text-black" required />
              )}
            </div>

            <div><label className="block text-lg font-semibold mb-3">Pickup Date</label><input type="date" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} min={new Date().toISOString().split('T')[0]} className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl text-black" required /></div>
            <div><label className="block text-lg font-semibold mb-3">Pickup Time</label><input type="time" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl text-black" required /></div>
            <div><label className="block text-lg font-semibold mb-3">Passengers</label><input type="number" placeholder="Number of passengers" value={passengers} onChange={(e) => setPassengers(e.target.value)} min="1" className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl text-black" required /></div>
            <div><label className="block text-lg font-semibold mb-3">Baby/Child Seat?</label>
              <select value={babySeat} onChange={(e) => setBabySeat(e.target.value)} className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl text-black">
                <option value="No">No, thanks</option>
                <option value="Yes">Yes – + LKR 1,500</option>
              </select>
            </div>

            {/* Vehicle Selection */}
            <div className="md:col-span-2 mt-8">
              <label className="block text-lg font-semibold mb-6">Choose Your Vehicle</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {vehicleTypes.map(v => (
                  <button key={v.name} type="button" onClick={() => setVehicle(v)}
                    className={`p-7 rounded-2xl border-3 transition-all ${vehicle.name === v.name ? 'border-green-600 bg-green-50 shadow-xl scale-105' : 'border-gray-300 hover:border-green-500 hover:shadow-lg'}`}
                  >
                    <Car className="w-16 h-16 mx-auto mb-4 text-green-600" />
                    <p className="font-bold text-lg text-black">{v.name}</p>
                    <p className="text-sm text-gray-700">{v.pax} • {v.luggage}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Extras */}
            <div className="md:col-span-2">
              <label className="block text-lg font-semibold mb-5">Optional Extras</label>
              <div className="space-y-5 bg-gray-50 p-7 rounded-2xl text-black">
                <label className="flex items-center gap-4 text-base"><input type="checkbox" checked={extras.wifi} onChange={(e) => setExtras({...extras, wifi: e.target.checked})} className="w-6 h-6 text-green-600 rounded" /> WiFi on board (+ LKR 1,000)</label>
                <label className="flex items-center gap-4 text-base"><input type="checkbox" checked={extras.water} onChange={(e) => setExtras({...extras, water: e.target.checked})} /> Mineral Water for all (+ LKR 500)</label>
                <label className="flex items-center gap-4 text-base"><input type="checkbox" checked={extras.waiting} onChange={(e) => setExtras({...extras, waiting: e.target.checked})} /> Extra waiting time (+ LKR 2,000/hr)</label>
              </div>
            </div>
          </div>

          {/* Summary + Calculate Button */}
          <div className="border-t-4 border-gray-200 pt-12 mt-16 text-black">
            <h3 className="text-3xl font-bold text-center mb-10">Your Transfer Summary</h3>

            <div className="bg-gray-50 rounded-3xl p-10 mb-12 text-black text-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div><span className="text-gray-600">From → To:</span><br /><strong className="text-xl">{from && to ? `${from === 'Other (please specify)' ? otherFrom : from} → ${to === 'Other (please specify)' ? otherTo : to}` : '—'}</strong></div>
                <div><span className="text-gray-600">Date & Time:</span><br /><strong className="text-xl">{pickupDate && pickupTime ? `${pickupDate} at ${pickupTime}` : '—'}</strong></div>
                <div><span className="text-gray-600">Passengers:</span><br /><strong className="text-xl">{passengers || '—'}</strong></div>
                <div><span className="text-gray-600">Vehicle:</span><br /><strong className="text-xl">{vehicle.name ? `${vehicle.name} (${vehicle.pax})` : '—'}</strong></div>
                <div className="md:col-span-2"><span className="text-gray-600">Extras:</span><br /><strong className="text-xl">
                  {[
                    babySeat === 'Yes' && 'Baby Seat (+1,500)',
                    extras.wifi && 'WiFi (+1,000)',
                    extras.water && 'Water (+500)',
                    extras.waiting && 'Extra Waiting (+2,000/hr)'
                  ].filter(Boolean).join(' • ') || 'None'}
                </strong></div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={calculateFare}
                disabled={!from || !to || !passengers || !pickupDate || !pickupTime || !vehicle.name}
                className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-24 py-7 rounded-2xl text-2xl font-bold shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
              >
                {fare > 0 ? 'Re-Calculate Fare' : 'Calculate Fare & Book Now'}
              </button>
            </div>
          </div>

          {/* Final Fare + Booking Form */}
          {fare !== null && fare > 0 && (
            <div className="mt-20 p-12 bg-green-50 rounded-3xl border-4 border-green-200 text-black">
              <h3 className="text-5xl font-bold text-center text-green-700 mb-12">
                Total Fare: LKR {fare.toLocaleString()}
              </h3>

              <form onSubmit={handleBooking} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input type="text" placeholder="Full Name *" value={name} onChange={(e) => setName(e.target.value)} required className="px-6 py-5 border-2 border-gray-300 rounded-xl text-black text-lg" />
                  <input type="email" placeholder="Email *" value={email} onChange={(e) => setEmail(e.target.value)} required className="px-6 py-5 border-2 border-gray-300 rounded-xl text-black text-lg" />
                  <input type="tel" placeholder="Phone *" value={phone} onChange={(e) => setPhone(e.target.value)} required className="px-6 py-5 border-2 border-gray-300 rounded-xl text-black text-lg" />
                  <input type="tel" placeholder="WhatsApp (Recommended)" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} className="px-6 py-5 border-2 border-gray-300 rounded-xl text-black text-lg" />
                </div>
                <textarea placeholder="Flight number, hotel name, special requests..." rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full px-6 py-5 border-2 border-gray-300 rounded-xl text-black text-lg" />

                <div className="text-center">
                  <button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white px-24 py-7 rounded-2xl text-2xl font-bold shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  );
}