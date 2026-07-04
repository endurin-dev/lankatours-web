'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Car, CarFront, Bus, Sparkles, Users, Tag } from 'lucide-react';

// Full destination list — matches /transfers page rates.
// Vehicle prices: [Mini Car, Sedan, Van, Van XL, Bus]
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
  { name: 'Mini',  maxPax: 2,  idx: 0, icon: Car },
  { name: 'Sedan', maxPax: 4,  idx: 1, icon: CarFront },
  { name: 'Van',   maxPax: 6,  idx: 2, icon: Car },
  { name: 'XL',    maxPax: 11, idx: 3, icon: CarFront },
  { name: 'Bus',   maxPax: 18, idx: 4, icon: Bus },
];

// 30-minute time slots, 12hr display / 24hr value
const timeSlots = Array.from({ length: 48 }, (_, i) => {
  const hours24 = Math.floor(i / 2);
  const minutes = i % 2 === 0 ? '00' : '30';
  const value = `${String(hours24).padStart(2, '0')}:${minutes}`;
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;
  const period = hours24 < 12 ? 'AM' : 'PM';
  return { value, label: `${hours12}:${minutes} ${period}` };
});

export default function HeroQuoteForm() {
  const router = useRouter();

  const [direction, setDirection] = useState<'pickup' | 'drop'>('pickup');
  const [destination, setDestination] = useState('');
  const [vehicleIdx, setVehicleIdx] = useState(1); // Sedan default
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [passengers, setPassengers] = useState('');

  const dest = destinations.find(d => d.name === destination);
  const price = dest ? dest.prices[vehicleIdx] : null;
  const destinationLabel = direction === 'pickup' ? 'Drop-off Destination' : 'Pickup Destination';

  const handlePassengersChange = (value: string) => {
    setPassengers(value);
    const num = Number(value);
    if (num > 0) {
      const fits = vehicles.find(v => num <= v.maxPax);
      if (fits && fits.idx > vehicleIdx) setVehicleIdx(fits.idx);
    }
  };

  const handleBookNow = () => {
    const params = new URLSearchParams();

    // Core selection
    params.set('direction', direction);
    if (destination) params.set('destination', destination);
    params.set('vehicle', String(vehicleIdx));
    params.set('vehicleName', vehicles[vehicleIdx].name);

    // Trip details
    if (pickupDate) params.set('date', pickupDate);
    if (pickupTime) params.set('time', pickupTime);
    if (passengers) params.set('passengers', passengers);

    // Calculated price, so /transfers can show it immediately
    // without waiting for the user to hit "Calculate Fare" again
    if (price !== null) params.set('price', String(price));

    router.push(`/transfers?${params.toString()}`);
  };

  return (
    <div className="relative w-full max-w-xl mt-6 md:mt-8">
      {/* Glow accent behind the card */}
      <div className="absolute -inset-1 bg-gradient-to-r from-green-400/40 via-emerald-400/30 to-green-400/40 rounded-3xl blur-xl" aria-hidden="true" />

      <div className="relative bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl pt-6 px-5 pb-4 md:pt-7 md:px-6 md:pb-5 text-left">

        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-green-300" />
          <p className="text-white font-bold text-sm">Instant Transfer Price</p>
        </div>

        {/* Direction */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          {(['pickup', 'drop'] as const).map(d => (
            <button
              key={d}
              type="button"
              onClick={() => setDirection(d)}
              className={`py-2 px-3 rounded-lg text-xs font-bold transition-all border ${
                direction === d
                  ? 'bg-white text-green-700 border-white shadow-md'
                  : 'bg-white/10 text-white border-white/25 hover:bg-white/20'
              }`}
            >
              {d === 'pickup' ? '✈️ Airport → Hotel' : '🏨 Hotel → Airport'}
            </button>
          ))}
        </div>

        {/* Destination */}
        <div className="mb-3">
          <label className="block text-white/70 text-[10px] font-bold uppercase tracking-wide mb-1">
            {destinationLabel}
          </label>
          <select
            value={destination}
            onChange={e => setDestination(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-white/95 text-gray-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">— Select destination —</option>
            {destinations.map(d => (
              <option key={d.name} value={d.name}>{d.name}</option>
            ))}
          </select>
        </div>

        {/* Vehicle — clear capacity display */}
        <div className="mb-3">
          <label className="block text-white/70 text-[10px] font-bold uppercase tracking-wide mb-1">
            Vehicle & Passenger Capacity
          </label>
          <div className="grid grid-cols-5 gap-1.5">
            {vehicles.map(v => {
              const Icon = v.icon;
              const isSelected = vehicleIdx === v.idx;
              return (
                <button
                  key={v.name}
                  type="button"
                  onClick={() => setVehicleIdx(v.idx)}
                  className={`flex flex-col items-center justify-center py-2 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-green-600 border-green-400 shadow-lg shadow-green-900/30 scale-105'
                      : 'bg-white/10 border-white/20 hover:bg-white/20'
                  }`}
                >
                  <Icon className={`w-6 h-6 mb-0.5 ${isSelected ? 'text-white' : 'text-white/80'}`} />
                  <span className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-white/85'}`}>{v.name}</span>
                  <span
                    className={`flex items-center gap-0.5 mt-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                      isSelected ? 'bg-white text-green-700' : 'bg-white/20 text-white'
                    }`}
                  >
                    <Users className="w-2.5 h-2.5" />
                    {v.maxPax}
                  </span>
                </button>
              );
            })}
          </div>
          {/* Explicit capacity confirmation line for the selected vehicle */}
          <p className="mt-1.5 text-center text-white/80 text-[11px] font-medium">
            <span className="font-bold text-white">{vehicles[vehicleIdx].name}</span> seats up to{' '}
            <span className="font-bold text-green-300">{vehicles[vehicleIdx].maxPax} passengers</span>
          </p>
        </div>

        {/* Date, Time, Passengers */}
        <div className="mb-4">
          <label className="block text-white/70 text-[10px] font-bold uppercase tracking-wide mb-1">
            Date, Time & Passengers
          </label>
          <div className="grid grid-cols-3 gap-1.5">
            <input
              type="date"
              value={pickupDate}
              onChange={e => setPickupDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-2 py-2 rounded-lg bg-white/95 text-gray-900 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <select
              value={pickupTime}
              onChange={e => setPickupTime(e.target.value)}
              className="w-full px-2 py-2 rounded-lg bg-white/95 text-gray-900 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="">Time</option>
              {timeSlots.map(t => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Pax"
              min={1}
              max={18}
              value={passengers}
              onChange={e => handlePassengersChange(e.target.value)}
              className="w-full px-2 py-2 rounded-lg bg-white/95 text-gray-900 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        </div>

        {/* Price — creative highlighted badge */}
        <div className="relative mb-4">
          {price ? (
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 p-[2px] shadow-lg shadow-green-900/50">
              {/* animated sheen sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full animate-[shimmer_2.5s_infinite]" aria-hidden="true" />

              <div className="relative bg-gradient-to-br from-green-600/95 to-emerald-700/95 rounded-2xl px-4 py-3 flex items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-300 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400" />
                    </span>
                    <span className="text-[10px] font-bold text-lime-200 uppercase tracking-wider">Live Fixed Price</span>
                  </div>
                  <p className="text-2xl md:text-3xl font-extrabold text-white leading-none tracking-tight">
                    LKR {price.toLocaleString()}
                  </p>
                </div>

                <div className="flex flex-col items-end gap-1">
                  <span className="flex items-center gap-1 bg-white text-green-700 text-[10px] font-extrabold px-2 py-1 rounded-full shadow-md">
                    <Tag className="w-3 h-3" />
                    Best Price
                  </span>
                  <span className="text-[10px] text-white/80 font-medium">No hidden fees</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border-2 border-dashed border-white/30 px-4 py-3 text-center">
              <p className="text-xs text-white/70">Select a destination above to reveal your instant fixed price</p>
            </div>
          )}

          <style jsx>{`
            @keyframes shimmer {
              100% {
                transform: translateX(100%);
              }
            }
          `}</style>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-end pt-1">
          <button
            onClick={handleBookNow}
            disabled={!destination}
            className="w-full inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:from-white/20 disabled:to-white/20 disabled:cursor-not-allowed disabled:text-white/50 text-white px-5 py-3 rounded-xl font-bold text-sm shadow-lg shadow-green-900/40 transition-all hover:scale-[1.02] disabled:hover:scale-100"
          >
            Book Now
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}