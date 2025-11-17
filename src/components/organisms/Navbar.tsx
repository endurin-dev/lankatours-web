'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo with Image */}
          <Link href="/" className="flex items-center space-x-3">
           <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden bg-white shadow-sm border border-gray-200">
  <Image
  src="/images/logo.jpeg"
  alt="Lanka Tours and Transfers"
  fill
  sizes="180px"
  className="object-contain p-1.5"
  priority
/>

</div>
            <span className="text-xl font-bold text-gray-900 leading-tight">
              Lanka Tours
              <br />
              <span className="text-sm font-normal text-gray-600">& Transfers</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
            <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
            <li><Link href="/transfers" className="hover:text-primary transition">Transfers</Link></li>
            <li><Link href="/tours" className="hover:text-primary transition">Tours</Link></li>
            <li><Link href="/scooters" className="hover:text-primary transition">Scooters</Link></li>
            <li><Link href="/shop" className="hover:text-primary transition">Shop</Link></li>
            <li><Link href="/services" className="hover:text-primary transition">Services</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition">Contact</Link></li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <ul className="space-y-4 text-gray-700 font-medium">
              {[
                { name: 'Home', href: '/' },
                { name: 'Transfers', href: '/transfers' },
                { name: 'Tours', href: '/tours' },
                { name: 'Scooters', href: '/scooters' },
                { name: 'Shop', href: '/shop' },
                { name: 'Services', href: '/services' },
                { name: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block hover:text-primary transition py-2"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}