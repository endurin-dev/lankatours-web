'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Phone, Mail, MapPin, Facebook, Instagram,
  MessageCircle, Send, ChevronDown, Shield, Star
} from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      {/* HERO – Smaller fonts, aligned to bottom, smooth fade at bottom */}
   <section className="relative h-[65vh] md:h-[70vh] flex flex-col justify-end text-white pb-16 md:pb-20 overflow-hidden">
        <Image
          src="/images/contact-hero_2.webp"
          alt="Contact Lanka Tours & Transfers"
          fill
          priority
          className="object-cover brightness-110"
        />

        {/* Light overlay + soft fade at bottom to blend with next section */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
<h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-white tracking-tight"
    style={{ textShadow: '0 4px 12px rgba(0,0,0,0.9)' }}>
  Get in Touch With Us
</h1>




          <div className="mt-10">
<a href="https://wa.me/94773951779" target="_blank" rel="noopener noreferrer"
  className="group relative inline-flex items-center gap-4 px-10 py-6 
             bg-white/20 backdrop-blur-xl border-2 border-white/40 
             text-white font-bold text-xl rounded-3xl 
             shadow-2xl hover:shadow-white/30
             transition-all duration-500 hover:scale-110 active:scale-95
             animate-pulse-glass">
  <MessageCircle className="w-8 h-8" />
  <span>Chat on WhatsApp Now</span>
  <span className="absolute inset-0 rounded-3xl bg-white/10 scale-0 
                   group-hover:scale-150 transition-transform duration-700" />
</a>
          </div>
        </div>
      </section>

      {/* CONTACT INFO + SOCIAL + MAP */}
      <section className="py-20 bg-white"> {/* Changed from gray-50 to white */}
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left Side */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Contact Information
                </h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-7 h-7 text-green-700" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg text-gray-900">Phone / WhatsApp</p>
                      <a href="tel:+94771234567" className="text-xl text-green-600 hover:underline">+94 77 395 1779</a>
                      <p className="text-sm text-gray-600 mt-1">Call or message anytime – we reply in minutes!</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-7 h-7 text-green-700" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg text-gray-900">Email</p>
                      <a href="mailto:info@lankatoursandtransfers.com" className="text-xl text-green-600 hover:underline">
                        tourstransfers.lk@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-7 h-7 text-green-700" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg text-gray-900">Office Address</p>
                      <p className="text-lg text-gray-700">
                        No. 416/E, Matara Road,<br />
                        Galle,<br />
                        Southern Province, Sri Lanka
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media – Now with black text */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
                <div className="grid grid-cols-3 gap-5">
                  <a href="https://facebook.com/tourstransfers.lk" target="_blank" rel="noopener noreferrer"
                    className="group bg-gray-50 rounded-2xl p-6 text-center shadow hover:shadow-xl transition-all hover:scale-105">
                    <Facebook className="w-12 h-12 mx-auto text-blue-600 mb-3" />
                    <p className="font-semibold text-gray-900">Facebook</p>
                  </a>
                  <a href="https://instagram.com/lankatoursandtransfers" target="_blank" rel="noopener noreferrer"
                    className="group bg-gray-50 rounded-2xl p-6 text-center shadow hover:shadow-xl transition-all hover:scale-105">
                    <Instagram className="w-12 h-12 mx-auto text-pink-600 mb-3" />
                    <p className="font-semibold text-gray-900">Instagram</p>
                  </a>
                  <a href="https://wa.me/94773951779" target="_blank" rel="noopener noreferrer"
                    className="group bg-gray-50 rounded-2xl p-6 text-center shadow hover:shadow-xl transition-all hover:scale-105">
                    <MessageCircle className="w-12 h-12 mx-auto text-green-600 mb-3" />
                    <p className="font-semibold text-gray-900">WhatsApp</p>
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-green-600" />
                  <span className="font-semibold text-gray-900">Licensed by Sri Lanka Tourism</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-6 h-6 text-yellow-500 fill-current" />
                  <span className="font-semibold text-gray-900">4.9/5 - 300+ Reviews</span>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="h-96 md:h-full min-h-96 rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.7165494194815!2d80.23418997581543!3d6.033583028660869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17fc358cc75ed%3A0x1be3fa21f8792a46!2sLanka%20Tours%20%26%20Transfer%20official%20%2Fmoney%20exchange%20%2Fsurf%2Chandicraft%2CGift%20Shop%20%2FScooter%20%26%20bike%20Rent%20%2FSurf%20camp!5e0!3m2!1sen!2slk!4v1763659276973!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM – Black text, clean white background */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600">
              We'll reply within 5–10 minutes (usually faster on WhatsApp!)
            </p>
          </div>

          <form action="https://formspree.io/f/your-form-id" method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input type="text" name="name" placeholder="Your Full Name *" required
              className="px-6 py-5 rounded-2xl border-2 border-gray-300 focus:border-green-600 outline-none text-lg text-gray-900 placeholder-gray-500" />
            <input type="email" name="email" placeholder="Email Address *" required
              className="px-6 py-5 rounded-2xl border-2 border-gray-300 focus:border-green-600 outline-none text-lg text-gray-900 placeholder-gray-500" />
            <input type="tel" name="phone" placeholder="Phone / WhatsApp Number *" required
              className="px-6 py-5 rounded-2xl border-2 border-gray-300 focus:border-green-600 outline-none text-lg text-gray-900 placeholder-gray-500 md:col-span-2" />
            <select name="service" defaultValue="" className="px-6 py-5 rounded-2xl border-2 border-gray-300 focus:border-green-600 outline-none text-lg text-gray-900 md:col-span-2">
              <option value="" disabled>I am interested in...</option>
              <option>Airport Transfer</option>
              <option>Tour Package</option>
              <option>Hotel Booking</option>
              <option>Safari / Excursion</option>
              <option>Scooter Rental</option>
              <option>Other</option>
            </select>
            <textarea name="message" rows={6} placeholder="Your Message / Special Requests *" required
              className="px-6 py-5 rounded-2xl border-2 border-gray-300 focus:border-green-600 outline-none text-lg text-gray-900 placeholder-gray-500 resize-none md:col-span-2" />

            <div className="md:col-span-2 text-center">
              <button type="submit"
                className="inline-flex items-center gap-4 px-12 py-6 bg-green-600 hover:bg-green-700 text-white font-bold text-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                Send Message <Send className="w-7 h-7" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ Section – unchanged */}
        <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                q: "How fast do you reply?",
                a: "On WhatsApp: usually within 5 minutes (24/7). Email: within 1-2 hours during business hours, max 12 hours."
              },
              {
                q: "Can I call you directly?",
                a: "Yes! Call or WhatsApp +94 77 123 4567 anytime. Our team speaks English fluently."
              },
              {
                q: "Do you have an office I can visit?",
                a: "Yes, our main office is in Hikkaduwa. You're welcome to visit (best to message first). We also have representatives in Negombo, Colombo, and Galle."
              },
              {
                q: "Is it safe to share my flight details?",
                a: "100% safe. We are a registered Sri Lanka Tourism company. Your data is used only for your transfer and deleted after the service."
              },
              {
                q: "Can I get a quote without calling?",
                a: "Yes! Use our instant quote form on the homepage or WhatsApp us your details – quote in seconds."
              }
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <summary className="flex items-center justify-between px-8 py-6 cursor-pointer font-semibold text-lg text-gray-800">
                  {faq.q}
                  <ChevronDown className="w-6 h-6 text-green-600 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-8 pb-6 text-gray-700 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>




    </>
  );
}