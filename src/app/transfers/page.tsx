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
  {/* Hero */}
<section className="relative h-96 md:h-screen/2 flex items-end justify-center text-white overflow-hidden">
  <Image
    src="/images/transfers-hero-img2.webp"
    alt="Airport Transfer Sri Lanka"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/90" />
  <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pb-12 md:pb-20">
    <h1 className="text-2xl md:text-4xl font-bold mb-4">
      Airport & Hotel Transfers Sri Lanka
    </h1>
    <p className="text-lg md:text-xl mb-4">
      Private • Safe • Comfortable • Fixed Prices • 24/7 Available
    </p>
    <p className="text-base md:text-lg opacity-90">
      To Any Destination in Sri Lanka
    </p>
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
                    Confirm Booking – We’ll Contact You in ≤5 Minutes
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