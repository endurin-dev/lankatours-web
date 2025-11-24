'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-700 ease-in-out rounded-2xl overflow-hidden
        ${showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-32 opacity-0 pointer-events-none'}
      `}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(0, 0, 0, 0.2)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 pointer-events-none" />

      <div className="relative container mx-auto px-6 py-5">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4">
            <div className="relative w-14 h-14 rounded-xl overflow-hidden ring-4 ring-black/20 shadow-xl">
              <Image
                src="/images/logo.jpeg"
                alt="Lanka Tours and Transfers"
                fill
                sizes="140px"
                className="object-contain p-2"
                priority
              />
            </div>
            <div>
              <span className="font-bold text-2xl text-black drop-shadow-sm">
                Lanka Tours
              </span>
              <br />
             <span className="text-lg font-medium text-black">
  & Transfers
</span>

            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-10 font-medium text-black">
            {['Home', 'Transfers', 'Tours', 'Scooters', 'Shop', 'Services', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="relative group text-black/80 hover:text-black transition"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-black to-gray-600 transition-all group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-xl bg-black/10 backdrop-blur-md border border-black/20 text-black"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-6 pb-6 bg-white/40 backdrop-blur-2xl rounded-2xl border border-black/20">
            <ul className="space-y-2 px-6 pt-4 text-black font-medium">
              {['Home', 'Transfers', 'Tours', 'Scooters', 'Shop', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 hover:text-gray-700 transition border-b border-black/10 last:border-0"
                  >
                    {item}
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
