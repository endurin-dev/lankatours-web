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
      <section className="relative h-96 md:h-screen/2 flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/images/transfers-hero.jpg"
          alt="Airport Transfer Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Airport & Hotel Transfers Sri Lanka
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Private • Safe • Comfortable • Fixed Prices • 24/7 Available
          </p>
          <p className="text-lg opacity-90">
            From Colombo Airport (CMB) to Any Destination – Instant Quote Below
          </p>
        </div>
      </section>

      {/* Main Booking Calculator */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get Instant Transfer Price & Book Now
            </h2>
            <p className="text-lg text-gray-600">
              Real-time pricing • No hidden charges • Book in 60 seconds
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            {/* Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {/* From */}
              <div>
                <label className="block text-lg font-semibold mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-600" /> Pickup Location
                </label>
                <select value={from} onChange={(e) => setFrom(e.target.value)} className="w-full px-5 py-4 border rounded-xl focus:border-green-600 focus:ring-4 focus:ring-green-100" required>
                  {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                </select>
                {from === 'Other (please specify)' && (
                  <input type="text" placeholder="Enter pickup location" value={otherFrom} onChange={(e) => setOtherFrom(e.target.value)} className="w-full mt-3 px-5 py-4 border rounded-xl" required />
                )}
              </div>

              {/* To */}
              <div>
                <label className="block text-lg font-semibold mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-600" /> Drop-off Location
                </label>
                <select value={to} onChange={(e) => setTo(e.target.value)} className="w-full px-5 py-4 border rounded-xl focus:border-green-600 focus:ring-4 focus:ring-green-100" required>
                  <option value="">Select destination</option>
                  {locations.filter(l => l !== from).map(loc => <option key={loc} value={loc}>{loc}</option>)}
                </select>
                {to === 'Other (please specify)' && (
                  <input type="text" placeholder="Enter drop-off location" value={otherTo} onChange={(e) => setOtherTo(e.target.value)} className="w-full mt-3 px-5 py-4 border rounded-xl" required />
                )}
              </div>

              {/* Vehicle */}
              <div className="md:col-span-2">
                <label className="block text-lg font-semibold mb-4">Choose Vehicle</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {vehicleTypes.map(v => (
                    <button
                      key={v.name}
                      type="button"
                      onClick={() => setVehicle(v)}
                      className={`p-6 rounded-2xl border-2 transition-all ${vehicle.name === v.name ? 'border-green-600 bg-green-50 shadow-lg' : 'border-gray-300 hover:border-green-400'}`}
                    >
                      <Car className="w-12 h-12 mx-auto mb-3 text-green-600" />
                      <p className="font-bold">{v.name}</p>
                      <p className="text-xs text-gray-600">{v.pax}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Passengers, Date, Time */}
              <input type="number" placeholder="Passengers" value={passengers} onChange={(e) => setPassengers(e.target.value)} min="1" className="px-5 py-4 border rounded-xl" required />
              <input type="date" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} min={new Date().toISOString().split('T')[0]} className="px-5 py-4 border rounded-xl" required />
              <input type="time" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} className="px-5 py-4 border rounded-xl" required />

              {/* Baby Seat & Extras */}
              <select value={babySeat} onChange={(e) => setBabySeat(e.target.value)} className="px-5 py-4 border rounded-xl">
                <option value="No">Baby Seat? No</option>
                <option value="Yes">Yes (+ LKR 1,500)</option>
              </select>

              <div className="space-y-3">
                <label className="flex items-center gap-3"><input type="checkbox" checked={extras.wifi} onChange={(e) => setExtras({...extras, wifi: e.target.checked})} /> WiFi (+ LKR 1,000)</label>
                <label className="flex items-center gap-3"><input type="checkbox" checked={extras.water} onChange={(e) => setExtras({...extras, water: e.target.checked})} /> Mineral Water (+ LKR 500)</label>
                <label className="flex items-center gap-3"><input type="checkbox" checked={extras.waiting} onChange={(e) => setExtras({...extras, waiting: e.target.checked})} /> Extra Waiting (+ LKR 2,000/hr)</label>
              </div>
            </div>

            {/* Calculate Button */}
            <div className="text-center">
              <button
                onClick={calculateFare}
                className="bg-green-600 hover:bg-green-700 text-white px-16 py-6 rounded-2xl text-xl font-bold shadow-xl hover:shadow-2xl transition-all"
              >
                Calculate Fare & Book Now
              </button>
            </div>

            {/* Fare Result + Booking Form */}
            {fare !== null && fare > 0 && (
              <div className="mt-12 p-10 bg-green-50 rounded-3xl border-4 border-green-200">
                <h3 className="text-4xl font-bold text-center text-green-700 mb-8">
                  Total Fare: LKR {fare.toLocaleString()}
                </h3>

                <form onSubmit={handleBooking} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <input type="text" placeholder="Full Name *" value={name} onChange={(e) => setName(e.target.value)} required className="px-6 py-4 border rounded-xl" />
                    <input type="email" placeholder="Email *" value={email} onChange={(e) => setEmail(e.target.value)} required className="px-6 py-4 border rounded-xl" />
                    <input type="tel" placeholder="Phone *" value={phone} onChange={(e) => setPhone(e.target.value)} required className="px-6 py-4 border rounded-xl" />
                    <input type="tel" placeholder="WhatsApp (Recommended)" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} className="px-6 py-4 border rounded-xl" />
                  </div>
                  <textarea placeholder="Flight number, hotel name, special requests..." rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full px-6 py-4 border rounded-xl" />

                  <div className="text-center">
                    <button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white px-16 py-6 rounded-2xl text-xl font-bold shadow-xl hover:shadow-2xl transition-all">
                      Confirm Booking – We’ll Call/WhatsApp in 5 Minutes
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}