import Link from 'next/link';
import Image from 'next/image';
import {
  Facebook,
  Instagram,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Globe,
} from 'lucide-react';

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
                  alt="Lanka Tours & Transfer"
                  fill
                  className="object-contain"
                />
              </div>

              <span className="text-2xl font-bold tracking-tight">
                Lanka Tours
                <br />
                <span className="text-sm font-normal opacity-90">
                  & Transfers
                </span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-gray-200">
              Your trusted travel partner in Sri Lanka. Airport transfers,
              private tours, scooter rentals, hotel bookings, and travel
              services—all in one place.
            </p>

            <div className="flex space-x-4 pt-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:bg-white/20 p-3 rounded-full transition"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:bg-white/20 p-3 rounded-full transition"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/94773951779"
                target="_blank"
                rel="noreferrer"
                className="hover:bg-white/20 p-3 rounded-full transition bg-green-600/20 border border-green-400/30"
              >
                <MessageCircle className="w-5 h-5 text-green-400" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 border-b border-white/30 pb-2">
              Quick Links
            </h3>

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
                  <Link
                    href={link.href}
                    className="hover:text-secondary transition flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                    <span className="ml-2">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-5 border-b border-white/30 pb-2">
              Contact Info
            </h3>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />

                <span>
                  <strong>Lanka Tours &amp; Transfer</strong>
                  <br />
                  312/A
                  <br />
                  Ella Road
                  <br />
                  Kurundugahahethekma
                  <br />
                  Elpitiya
                  <br />
                  Sri Lanka 80400
                </span>
              </li>

              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />

                <div>
                  <p className="text-xs text-gray-300">
                    WhatsApp &amp; Hotline
                  </p>

                  <a
                    href="tel:+94773951779"
                    className="hover:text-secondary"
                  >
                    +94 77 395 1779
                  </a>
                </div>
              </li>

              <li className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-green-400 flex-shrink-0" />

                <a
                  href="https://wa.me/94773951779"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-secondary"
                >
                  Chat on WhatsApp
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />

                <a
                  href="mailto:tourstransfers.lk@gmail.com"
                  className="hover:text-secondary"
                >
                  tourstransfers.lk@gmail.com
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <Globe className="w-5 h-5 flex-shrink-0" />

                <a
                  href="https://www.lankatoursandtransfers.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-secondary"
                >
                  www.lankatoursandtransfers.com
                </a>
              </li>
            </ul>
          </div>

        {/* Column 4: Payment Methods */}
<div>
  <h3 className="text-lg font-semibold mb-5 border-b border-white/30 pb-2">
    Payment Methods
  </h3>

  <div className="grid grid-cols-3 gap-3 mb-5">

    <div className="bg-white rounded-lg p-2 flex items-center justify-center">
      <Image
        src="/images/payments/visa.svg"
        alt="Visa"
        width={60}
        height={35}
        className="object-contain"
      />
    </div>

    <div className="bg-white rounded-lg p-2 flex items-center justify-center">
      <Image
        src="/images/payments/mastercard.svg"
        alt="Mastercard"
        width={60}
        height={35}
        className="object-contain"
      />
    </div>

    <div className="bg-white rounded-lg p-2 flex items-center justify-center">
      <Image
        src="/images/payments/paypal.svg"
        alt="PayPal"
        width={60}
        height={35}
        className="object-contain"
      />
    </div>

    <div className="bg-white rounded-lg p-2 flex items-center justify-center">
      <Image
        src="/images/payments/binance.svg"
        alt="Binance Pay"
        width={60}
        height={35}
        className="object-contain"
      />
    </div>

    <div className="bg-white rounded-lg p-2 flex items-center justify-center">
      <Image
        src="/images/payments/payoneer.svg"
        alt="Payoneer"
        width={60}
        height={35}
        className="object-contain"
      />
    </div>

    <div className="bg-white rounded-lg p-2 flex items-center justify-center">
      <Image
        src="/images/payments/western-union.svg"
        alt="Western Union"
        width={60}
        height={35}
        className="object-contain"
      />
    </div>

  </div>

  <div className="space-y-2 text-sm text-gray-200">
    <p>✔ Visa & Mastercard</p>
    <p>✔ PayPal</p>
    <p>✔ Binance Pay</p>
    <p>✔ Payoneer</p>
    <p>✔ Western Union</p>
    <p>✔ Bank Transfer (RFC)</p>
  </div>

  <p className="text-xs text-gray-300 mt-5">
    Secure payments accepted worldwide.
  </p>
</div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/30 py-6 border-t border-white/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            © {new Date().getFullYear()} Lanka Tours &amp; Transfer. All rights
            reserved.
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