'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram, MessageCircle } from 'lucide-react';

const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com/tourstransfers.lk', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com/lankatoursandtransfers', icon: Instagram },
  { name: 'WhatsApp', href: 'https://wa.me/94773951779', icon: MessageCircle },
];

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
        ${
          showNavbar
            ? 'translate-y-0 opacity-100'
            : '-translate-y-32 opacity-0 pointer-events-none'
        }
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

      <div className="relative container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-11 h-11 rounded-lg overflow-hidden ring-2 ring-black/20 shadow-lg">
              <Image
                src="/images/logo.jpeg"
                alt="Lanka Tours and Transfers"
                fill
                sizes="120px"
                className="object-contain p-1.5"
                priority
              />
            </div>

            <div className="leading-tight">
              <span className="font-bold text-xl text-black drop-shadow-sm">
                Lanka Tours
              </span>
              <br />
              <span className="text-base font-medium text-black">
                & Transfers
              </span>
            </div>
          </Link>

          {/* Desktop Menu + Socials */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center space-x-8 font-medium text-black">
              {[
                'Home',
                'Transfers',
                'Tours',
                'Scooters',
                'Shop',
                'Services',
                'Contact',
              ].map((item) => (
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

            {/* Divider */}
            <span className="w-px h-6 bg-black/20" aria-hidden="true" />

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-black/10 hover:bg-black/20 transition-colors text-black"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-lg bg-black/10 backdrop-blur-md border border-black/20 text-black"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white/40 backdrop-blur-2xl rounded-xl border border-black/20">
            <ul className="space-y-1 px-6 pt-3 text-black font-medium">
              {[
                'Home',
                'Transfers',
                'Tours',
                'Scooters',
                'Shop',
                'Services',
                'Contact',
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="block py-2.5 hover:text-gray-700 transition border-b border-black/10 last:border-0"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social links inside mobile menu */}
            <div className="px-6 pt-4">
              <p className="text-xs font-semibold text-black/60 uppercase tracking-wide mb-3">
                Follow / Chat With Us
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 transition-colors text-black"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}