'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Car, Users } from 'lucide-react';

// ─── Price Data from Excel ───────────────────────────────────────────────────
// All prices in LKR. Both Airport Pickup and Airport Drop share the same rates.
// Vehicle columns: Mini Car | Sedan | Van | Van XL | Bus

const destinations = [
  { name: 'Negombo',                        prices: [3500,  5000,  7000,  8000,  10000] },
  { name: 'Marawila / Wennappuwa',          prices: [8000,  10000, 14000, 16000, 25000] },
  { name: 'Chilaw',                         prices: [20000, 25000, 30000, 35000, 55000] },
  { name: 'Kalpitiya',                      prices: [25000, 28000, 32000, 40000, 60000] },
  { name: 'Wilpattu',                       prices: [26000, 29000, 35000, 42000, 65000] },
  { name: 'Colombo',                        prices: [5000,  7000,  9000,  12000, 18000] },
  { name: 'Panadura / Wadduwa / Kalutara',  prices: [8000,  10000, 14000, 16000, 25000] },
  { name: 'Bentota / Aluthgama',            prices: [10000, 13000, 18000, 20000, 35000] },
  { name: 'Induruwa / Ahungalle / Kosgoda', prices: [12000, 14000, 17000, 19000, 35000] },
  { name: 'Ambalangoda / Hikkaduwa / Rathgama', prices: [13000, 15000, 18000, 20000, 35000] },
  { name: 'Galle / Unawatuna',              prices: [15000, 18000, 20000, 25000, 40000] },
  { name: 'Kabalana / Ahangama / Midigama', prices: [16000, 19000, 25000, 30000, 43000] },
  { name: 'Weligama',                       prices: [16000, 19000, 25000, 30000, 43000] },
  { name: 'Mirissa',                        prices: [17000, 20000, 25000, 35000, 48000] },
  { name: 'Hiriketiya / Dikwella / Thalalla', prices: [22000, 25000, 30000, 35000, 55000] },
  { name: 'Tangalle / Kalametiya',          prices: [28000, 30000, 40000, 45000, 75000] },
  { name: 'Yala / Hambantota',              prices: [32000, 35000, 45000, 50000, 80000] },
  { name: 'Pinnawala',                      prices: [8000,  10000, 14000, 16000, 25000] },
  { name: 'Sigiriya / Dambulla',            prices: [15000, 18000, 20000, 25000, 45000] },
  { name: 'Anuradhapura',                   prices: [22000, 25000, 30000, 38000, 60000] },
  { name: 'Polonnaruwa',                    prices: [27000, 30000, 40000, 50000, 75000] },
  { name: 'Kandy',                          prices: [15000, 18000, 20000, 25000, 45000] },
  { name: 'Nuwara Eliya / Hatton',          prices: [18000, 20000, 25000, 30000, 55000] },
  { name: 'Kithulgala',                     prices: [15000, 18000, 20000, 25000, 45000] },
  { name: 'Ella',                           prices: [27000, 30000, 40000, 45000, 65000] },
  { name: 'Pasikudah',                      prices: [32000, 35000, 45000, 55000, 75000] },
  { name: 'Trincomalee',                    prices: [28000, 30000, 40000, 45000, 65000] },
  { name: 'Arugam Bay',                     prices: [28000, 30000, 40000, 50000, 75000] },
  { name: 'Jaffna',                         prices: [40000, 45000, 55000, 65000, 98000] },
];

const vehicles = [
  { name: 'Mini Car',  pax: 'Max 2 pax',  luggage: '2 big + 2 hand', idx: 0 },
  { name: 'Sedan',     pax: 'Max 4 pax',  luggage: '3 big + 4 hand', idx: 1 },
  { name: 'Van',       pax: 'Max 6 pax',  luggage: '5 big + 6 hand', idx: 2 },
  { name: 'Van XL',    pax: 'Max 11 pax', luggage: '11 big + 10 hand', idx: 3 },
  { name: 'Bus',       pax: 'Max 18 pax', luggage: '18 big + 18 hand', idx: 4 },
];

// Extra services
const extras = [
  { id: 'nameboard',   label: 'Name Board at Arrivals Hall',  price: 1500  },
  { id: 'babyseat',    label: 'Baby / Child Seat',            price: 2500  },
  { id: 'surfbelt',    label: 'Surf Belt',                    price: 1500  },
  { id: 'wheelchair',  label: 'Wheelchair (per day)',         price: 3000  },
];

function TransfersForm() {
  const searchParams = useSearchParams();

  const [direction, setDirection]   = useState<'pickup' | 'drop'>('pickup');
  const [destination, setDestination] = useState('');
  const [vehicleIdx, setVehicleIdx]  = useState(1); // Sedan default
  const [passengers, setPassengers]  = useState('');
  const [pickupDate, setPickupDate]  = useState('');
  const [pickupTime, setPickupTime]  = useState('');
  const [selectedExtras, setSelectedExtras] = useState<Record<string, boolean>>({});
  const [fare, setFare]              = useState<number | null>(null);

  // Booking fields
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [phone, setPhone]     = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [message, setMessage] = useState('');

  // ─── Pre-fill everything from query params sent by the hero quote form ───
  useEffect(() => {
    const directionParam = searchParams.get('direction');
    const destParam = searchParams.get('destination');
    const vehicleParam = searchParams.get('vehicle');
    const dateParam = searchParams.get('date');
    const timeParam = searchParams.get('time');
    const passengersParam = searchParams.get('passengers');
    const priceParam = searchParams.get('price');

    if (directionParam === 'pickup' || directionParam === 'drop') {
      setDirection(directionParam);
    }

    if (destParam) {
      const match = destinations.find(d => d.name === destParam);
      if (match) setDestination(match.name);
    }

    if (vehicleParam !== null) {
      const idx = Number(vehicleParam);
      if (!Number.isNaN(idx) && idx >= 0 && idx < vehicles.length) {
        setVehicleIdx(idx);
      }
    }

    if (dateParam) setPickupDate(dateParam);
    if (timeParam) setPickupTime(timeParam);
    if (passengersParam) setPassengers(passengersParam);

    // Show the fare immediately if it was already calculated in the hero form
    if (priceParam) {
      const parsedPrice = Number(priceParam);
      if (!Number.isNaN(parsedPrice) && parsedPrice > 0) {
        setFare(parsedPrice);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleExtra = (id: string) => {
    setSelectedExtras(prev => ({ ...prev, [id]: !prev[id] }));
    setFare(null); // recalculation needed once extras change after a pre-filled price
  };

  const calculateFare = () => {
    if (!destination || !passengers || !pickupDate || !pickupTime) return;
    const dest = destinations.find(d => d.name === destination);
    if (!dest) return;

    let total = dest.prices[vehicleIdx];
    extras.forEach(e => { if (selectedExtras[e.id]) total += e.price; });
    setFare(total);
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const selected = vehicles[vehicleIdx];
    const extrasText = extras.filter(e => selectedExtras[e.id]).map(e => e.label).join(', ') || 'None';
    alert(
      `Booking Confirmed!\n\nRoute: Bandaranaike Airport (CMB) ↔ ${destination}\nDirection: Airport ${direction === 'pickup' ? 'Pickup' : 'Drop'}\nVehicle: ${selected.name} (${selected.pax})\nTotal Fare: LKR ${fare?.toLocaleString()}\nPickup: ${pickupDate} at ${pickupTime}\nExtras: ${extrasText}\nName: ${name}\nWhatsApp: ${whatsapp || phone}\n\nWe will contact you on WhatsApp within 5 minutes!`
    );
  };

  const canCalculate = !!destination && !!passengers && !!pickupDate && !!pickupTime;

  return (
    <>
      {/* ── Main Booking Calculator (now first) ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get Instant Transfer Price & Book Now
            </h1>
            <p className="text-xl text-gray-600">Real fixed prices from our rate sheet • No hidden charges • Book in 60 seconds</p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr]">

              {/* LEFT – Steps */}
              <div className="hidden lg:block bg-gradient-to-b from-green-700 to-green-800 text-white p-12">
                <h3 className="text-4xl font-bold mb-14 text-white">Easy 3-Step Booking</h3>
                <ol className="relative space-y-20 before:absolute before:left-9 before:top-20 before:bottom-20 before:w-0.5 before:bg-white/40">
                  {[
                    { n: '1', title: 'Select Your Journey', desc: 'Pickup direction, destination, date, time, vehicle & extras' },
                    { n: '2', title: 'Review & Calculate',  desc: 'See your full summary and instant fixed price from our rate sheet' },
                    { n: '3', title: 'Book & Relax',        desc: 'We confirm via call / WhatsApp in ≤5 minutes – done!' },
                  ].map(s => (
                    <li key={s.n} className="relative pl-24">
                      <span className="absolute left-0 top-1 w-18 h-18 bg-white text-green-700 rounded-full flex items-center justify-center text-3xl font-bold shadow-xl">{s.n}</span>
                      <h4 className="text-2xl font-bold mb-3 text-white">{s.title}</h4>
                      <p className="text-lg leading-relaxed text-white/95">{s.desc}</p>
                    </li>
                  ))}
                </ol>

                {/* Vehicle capacity reference */}
                <div className="mt-14 bg-white/10 rounded-2xl p-6 text-sm text-white/90 space-y-2">
                  <p className="font-bold text-white mb-3">Vehicle Capacity Guide</p>
                  {vehicles.map(v => (
                    <p key={v.name}><span className="font-semibold text-white">{v.name}</span> – {v.pax} · {v.luggage}</p>
                  ))}
                </div>
              </div>

              {/* RIGHT – Form */}
              <div className="p-8 md:p-12 lg:p-16 text-black">

                {/* Direction Toggle */}
                <div className="mb-10">
                  <label className="block text-lg font-semibold mb-4">Transfer Direction</label>
                  <div className="grid grid-cols-2 gap-4">
                    {(['pickup', 'drop'] as const).map(d => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => { setDirection(d); setFare(null); }}
                        className={`py-5 px-6 rounded-2xl border-2 font-bold text-lg transition-all ${direction === d ? 'border-green-600 bg-green-50 text-green-700 shadow-lg scale-105' : 'border-gray-300 hover:border-green-400 text-gray-700'}`}
                      >
                        {d === 'pickup' ? '✈️ Airport → Hotel' : '🏨 Hotel → Airport'}
                        <p className="text-sm font-normal mt-1 text-gray-500">{d === 'pickup' ? 'We pick you up at CMB' : 'We drop you at CMB'}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">

                  {/* Destination */}
                  <div className="md:col-span-2">
                    <label className="block text-lg font-semibold mb-3">
                      {direction === 'pickup' ? 'Drop-off Destination' : 'Pickup Destination'}
                    </label>
                    <select
                      value={destination}
                      onChange={e => { setDestination(e.target.value); setFare(null); }}
                      className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:border-green-600 focus:ring-4 focus:ring-green-100 text-black"
                      required
                    >
                      <option value="">— Select destination —</option>
                      {destinations.map(d => <option key={d.name} value={d.name}>{d.name}</option>)}
                      <option value="other">Other (contact us for rates)</option>
                    </select>
                    {destination === 'other' && (
                      <p className="mt-2 text-sm text-amber-700 bg-amber-50 p-3 rounded-lg">We cover all island destinations. Please contact us for custom rates.</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-lg font-semibold mb-3">Pickup Date</label>
                    <input type="date" value={pickupDate} onChange={e => { setPickupDate(e.target.value); setFare(null); }} min={new Date().toISOString().split('T')[0]} className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl text-black" required />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold mb-3">Pickup Time</label>
                    <input type="time" value={pickupTime} onChange={e => { setPickupTime(e.target.value); setFare(null); }} className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl text-black" required />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold mb-3">Number of Passengers</label>
                    <input type="number" placeholder="e.g. 2" value={passengers} onChange={e => { setPassengers(e.target.value); setFare(null); }} min="1" max="18" className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl text-black" required />
                  </div>
                </div>

                {/* Vehicle Selection */}
                <div className="mb-10">
                  <label className="block text-lg font-semibold mb-5">Choose Your Vehicle</label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {vehicles.map(v => {
                      const dest = destinations.find(d => d.name === destination);
                      const price = dest ? dest.prices[v.idx] : null;
                      return (
                        <button
                          key={v.name}
                          type="button"
                          onClick={() => { setVehicleIdx(v.idx); setFare(null); }}
                          className={`p-5 rounded-2xl border-2 transition-all text-left ${vehicleIdx === v.idx ? 'border-green-600 bg-green-50 shadow-xl scale-105' : 'border-gray-300 hover:border-green-500 hover:shadow-md'}`}
                        >
                          <Car className="w-10 h-10 mb-2 text-green-600" />
                          <p className="font-bold text-base text-black">{v.name}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{v.pax}</p>
                          <p className="text-xs text-gray-400">{v.luggage}</p>
                          {price && (
                            <p className="text-sm font-bold text-green-700 mt-2">LKR {price.toLocaleString()}</p>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Optional Extras */}
                <div className="mb-10">
                  <label className="block text-lg font-semibold mb-4">Optional Extras</label>
                  <div className="bg-gray-50 p-6 rounded-2xl space-y-4">
                    {extras.map(e => (
                      <label key={e.id} className="flex items-center justify-between cursor-pointer group">
                        <span className="flex items-center gap-3 text-base text-black">
                          <input
                            type="checkbox"
                            checked={!!selectedExtras[e.id]}
                            onChange={() => toggleExtra(e.id)}
                            className="w-5 h-5 text-green-600 rounded"
                          />
                          {e.label}
                        </span>
                        <span className="text-sm font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                          + LKR {e.price.toLocaleString()}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Summary + Calculate */}
                <div className="border-t-4 border-gray-200 pt-10 mt-6 text-black">
                  <h3 className="text-2xl font-bold text-center mb-8">Your Transfer Summary</h3>

                  <div className="bg-gray-50 rounded-2xl p-8 mb-8 text-black">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
                      <div>
                        <span className="text-gray-500">Direction</span><br />
                        <strong>{direction === 'pickup' ? '✈️ Airport → Hotel' : '🏨 Hotel → Airport'}</strong>
                      </div>
                      <div>
                        <span className="text-gray-500">Destination</span><br />
                        <strong>{destination || '—'}</strong>
                      </div>
                      <div>
                        <span className="text-gray-500">Date & Time</span><br />
                        <strong>{pickupDate && pickupTime ? `${pickupDate} at ${pickupTime}` : '—'}</strong>
                      </div>
                      <div>
                        <span className="text-gray-500">Passengers</span><br />
                        <strong>{passengers || '—'}</strong>
                      </div>
                      <div>
                        <span className="text-gray-500">Vehicle</span><br />
                        <strong>{vehicles[vehicleIdx].name} ({vehicles[vehicleIdx].pax})</strong>
                      </div>
                      <div>
                        <span className="text-gray-500">Extras</span><br />
                        <strong>{extras.filter(e => selectedExtras[e.id]).map(e => e.label).join(', ') || 'None'}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      onClick={calculateFare}
                      disabled={!canCalculate || destination === 'other'}
                      className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-16 py-6 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
                    >
                      {fare !== null ? '🔄 Re-Calculate Fare' : '💰 Calculate Fare & Book Now'}
                    </button>
                    {destination === 'other' && (
                      <p className="mt-3 text-amber-700 font-medium">Please contact us directly for this destination's rates.</p>
                    )}
                  </div>
                </div>

                {/* Final Fare + Booking Form */}
                {fare !== null && fare > 0 && (
                  <div className="mt-16 p-10 bg-green-50 rounded-3xl border-4 border-green-200 text-black">
                    <div className="text-center mb-10">
                      <p className="text-lg text-gray-600 mb-1">Fixed Transfer Rate</p>
                      <h3 className="text-5xl font-bold text-green-700">LKR {fare.toLocaleString()}</h3>
                      <p className="text-sm text-gray-500 mt-2">Includes: Airport fees • Parking • Tolls • Fuel • Driver meals</p>
                    </div>

                    <form onSubmit={handleBooking} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text"  placeholder="Full Name *"              value={name}     onChange={e => setName(e.target.value)}     required className="px-5 py-4 border-2 border-gray-300 rounded-xl text-black text-base" />
                        <input type="email" placeholder="Email *"                  value={email}    onChange={e => setEmail(e.target.value)}    required className="px-5 py-4 border-2 border-gray-300 rounded-xl text-black text-base" />
                        <input type="tel"   placeholder="Phone *"                  value={phone}    onChange={e => setPhone(e.target.value)}    required className="px-5 py-4 border-2 border-gray-300 rounded-xl text-black text-base" />
                        <input type="tel"   placeholder="WhatsApp (Recommended)"   value={whatsapp} onChange={e => setWhatsapp(e.target.value)}          className="px-5 py-4 border-2 border-gray-300 rounded-xl text-black text-base" />
                      </div>
                      <textarea
                        placeholder="Flight number, hotel name, special requests..."
                        rows={4}
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl text-black text-base"
                      />
                      <div className="text-center">
                        <button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white px-20 py-6 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                          Confirm Booking
                        </button>
                        <p className="text-sm text-gray-500 mt-3">We'll contact you on WhatsApp within 5 minutes</p>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hero / Marketing content (now after the form) ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-14 md:mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Airport & Hotel Transfers Sri Lanka
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mt-3 md:mt-4 max-w-4xl mx-auto leading-snug">
              Private • Safe • Comfortable • Fixed Prices • 24/7 Available
            </p>
            <p className="text-lg md:text-xl text-gray-600 mt-2 md:mt-3 leading-snug">
              From Bandaranaike International Airport (CMB) – Island-wide Coverage
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10">
            {[
              { gradient: 'from-green-500 to-emerald-600', title: '24/7 Airport Transfers', desc: 'Available round-the-clock for early arrivals, late flights, or midnight transfers', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /> },
              { gradient: 'from-blue-500 to-indigo-600',   title: 'Fixed Price Guarantee',   desc: 'Transparent pricing – no surge, no meter, no extra charges ever',          icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /> },
              { gradient: 'from-purple-500 to-pink-600',   title: 'Personal Meet & Greet',   desc: 'Driver waits with your name board at Bandaranaike Airport arrivals hall',   icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /> },
              { gradient: 'from-orange-500 to-red-600',    title: 'Door-to-Door Delivery',   desc: 'Direct transfer to your hotel – Colombo, Kandy, Galle, Sigiriya, Ella & beyond', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> },
              { gradient: 'from-teal-500 to-cyan-600',     title: 'Real-Time Flight Tracking', desc: 'We track your flight and adjust pickup time automatically – no stress if delayed', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /> },
              { gradient: 'from-amber-500 to-orange-600',  title: 'Free Cancellation',        desc: 'Cancel up to 24 hours before your transfer – full refund, no questions',    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /> },
            ].map(item => (
              <div key={item.title} className="group text-center transform transition-all duration-300 hover:scale-110">
                <div className={`w-20 h-20 md:w-24 md:h-24 mx-auto mb-5 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl`}>
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                </div>
                <h3 className="font-bold text-gray-800 text-sm md:text-base">{item.title}</h3>
                <p className="text-xs md:text-sm text-gray-600 mt-1 leading-tight">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's Included Banner ── */}
      <section className="bg-green-700 py-8">
        <div className="container mx-auto px-6 max-w-7xl">
          <p className="text-center text-white font-semibold text-lg mb-4">✅ Every Transfer Includes – No Hidden Fees:</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-white/90 text-sm md:text-base">
            {['Airport Entrance Fee', 'Parking Charges', 'Highway Tolls', 'Fuel & Driver Meals', 'Professional English-Speaking Driver', 'Luggage Assistance', '24/7 Customer Support'].map(item => (
              <span key={item} className="flex items-center gap-2"><span className="text-green-300">✓</span>{item}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// useSearchParams requires a Suspense boundary in the App Router
export default function TransfersPage() {
  return (
    <Suspense fallback={null}>
      <TransfersForm />
    </Suspense>
  );
}