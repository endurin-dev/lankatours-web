import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, MessageCircle, Phone, Mail, MapPin, Globe } from 'lucide-react'; // Fixed import

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary to-primary/90 text-white mt-16">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Logo & About */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo.jpeg" 
                  alt="Lanka Tours and Transfers"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Lanka Tours<br />
                <span className="text-sm font-normal opacity-90">& Transfers</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-200">
              Your trusted travel partner in Sri Lanka. Airport transfers, tours, scooter rentals, 
              hotel bookings & more — all in one place.
            </p>
            <div className="flex space-x-4 pt-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:bg-white/20 p-3 rounded-full transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:bg-white/20 p-3 rounded-full transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/94767958890" target="_blank" rel="noreferrer" className="hover:bg-white/20 p-3 rounded-full transition bg-green-600/20 border border-green-400/30">
                <MessageCircle className="w-5 h-5 text-green-400" /> {/* WhatsApp-styled */}
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 border-b border-white/30 pb-2">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Home', href: '/' },
                { name: 'Airport Transfers', href: '/transfers' },
                { name: 'Tour Packages', href: '/tours' },
                { name: 'Scooter Rental', href: '/scooters' },
                { name: 'Shop', href: '/shop' },
                { name: 'Other Services', href: '/services' },
                { name: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-secondary transition flex items-center group">
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    <span className="ml-2">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-5 border-b border-white/30 pb-2">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Gampaha, Western Province<br />Sri Lanka</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <div>
                  <a href="tel:+94767958890" className="hover:text-secondary">+94 76 795 8890</a><br />
                  <a href="tel:+94768529594" className="hover:text-secondary">+94 76 852 9594</a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <a href="mailto:info@lankatoursandtransfers.com" className="hover:text-secondary">
                  info@lankatoursandtransfers.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Globe className="w-5 h-5" />
                <a href="https://www.lankatoursandtransfers.com" target="_blank" rel="noreferrer" className="hover:text-secondary">
                  www.lankatoursandtransfers.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Trust Badges / Payment Methods */}
          <div>
            <h3 className="text-lg font-semibold mb-5 border-b border-white/30 pb-2">We Accept</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              {['visa', 'mastercard', 'amex', 'paypal', 'stripe'].map((method) => (
                <div key={method} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition">
                  <div className="bg-gray-200 border-2 border-dashed rounded w-12 h-8" />
                  {/* Replace with real payment icons later */}
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-300">
              Secured by SSL • Licensed by Sri Lanka Tourism Development Authority
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/30 py-6 border-t border-white/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            © {new Date().getFullYear()} Lanka Tours and Transfers. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-3 md:mt-0">
            <Link href="/privacy" className="hover:text-secondary transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-secondary transition">
              Terms of Service
            </Link>
            <Link href="/refund" className="hover:text-secondary transition">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}