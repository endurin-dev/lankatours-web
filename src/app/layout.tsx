// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // SEO: prevents invisible text during font load (CLS fix)
  variable: '--font-inter',
});

// ─── SITE-WIDE METADATA ───────────────────────────────────────────────────────
// These are the defaults. Every page can override title/description via its own
// `export const metadata` or `generateMetadata()`. The `template` means a page
// that sets title:"Sigiriya Day Tour" will render as
// "Sigiriya Day Tour | Lanka Tours & Transfers"
export const metadata: Metadata = {
  // --- Core ---
  metadataBase: new URL('https://www.lankatoursandtransfers.com'), // ← replace with your real domain
  title: {
    default: 'Lanka Tours & Transfers | #1 Airport Transfer & Tours in Sri Lanka',
    template: '%s | Lanka Tours & Transfers',
  },
  description:
    'Book reliable Sri Lanka airport transfers, private tours & hotel packages. CMB airport pickup, Sigiriya, Yala safari, Kandy & more. Fixed prices, no hidden fees. Trusted since 2020.',
  keywords: [
    'Sri Lanka airport transfer',
    'Colombo airport taxi',
    'CMB airport transfer',
    'Sri Lanka tours',
    'Sigiriya day tour',
    'Yala safari',
    'Kandy tour',
    'Ella train tour',
    'Sri Lanka travel',
    'Lanka Tours Transfers',
    'airport to hotel Sri Lanka',
    'private driver Sri Lanka',
    'Sri Lanka tourism',
  ],

  // --- Open Graph (Facebook, WhatsApp previews) ---
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.lankatoursandtransfers.com',
    siteName: 'Lanka Tours & Transfers',
    title: 'Lanka Tours & Transfers | Sri Lanka Airport Transfers & Tours',
    description:
      'Trusted Sri Lanka travel partner since 2020. Airport transfers, private tours, hotel bookings, safaris & more. Fixed prices, 24/7 support.',
    images: [
      {
        url: '/images/og-image.jpg', // 1200×630px — create this image!
        width: 1200,
        height: 630,
        alt: 'Lanka Tours and Transfers — Sri Lanka travel services',
      },
    ],
  },

  // --- Twitter / X card ---
  twitter: {
    card: 'summary_large_image',
    title: 'Lanka Tours & Transfers | Sri Lanka Airport Transfers & Tours',
    description:
      'Trusted Sri Lanka travel partner since 2020. Airport transfers, private tours, hotel bookings, safaris & more.',
    images: ['/images/og-image.jpg'],
  },

  // --- Robots ---
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // --- Canonical (sitewide base; pages override via alternates.canonical) ---
  alternates: {
    canonical: 'https://www.lankatoursandtransfers.com',
  },

  // --- Verification (add your codes from Google Search Console / Bing) ---
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE', // ← replace
    // bing: 'YOUR_BING_CODE',
  },

  // --- Other ---
  authors: [{ name: 'Lanka Tours & Transfers', url: 'https://www.lankatoursandtransfers.com' }],
  creator: 'Lanka Tours & Transfers',
  publisher: 'Lanka Tours & Transfers',
  category: 'Travel & Tourism',
};

// ─── ORGANISATION / LOCAL BUSINESS STRUCTURED DATA ───────────────────────────
// Injected once in the root layout so it applies to every page.
// This powers Google's Knowledge Panel and rich results.
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['TravelAgency', 'LocalBusiness'],
  name: 'Lanka Tours & Transfers',
  alternateName: 'Lanka Tours and Transfers',
  url: 'https://www.lankatoursandtransfers.com',
  logo: 'https://www.lankatoursandtransfers.com/logo.png', // ← your logo URL
  image: 'https://www.lankatoursandtransfers.com/images/og-image.jpg',
  description:
    'Licensed Sri Lanka tourism company offering airport transfers, private tours, hotel bookings, safaris, and travel services since 2020.',
  foundingDate: '2020',
  telephone: '+94-YOUR-NUMBER', // ← replace
  email: 'info@lankatoursandtransfers.com', // ← replace
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'YOUR STREET ADDRESS', // ← replace
    addressLocality: 'Galle',
    addressRegion: 'Southern Province',
    addressCountry: 'LK',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '6.0535',   // ← replace with your actual coords
    longitude: '80.2210',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  priceRange: 'LKR 4,000 – LKR 25,000',
  currenciesAccepted: 'LKR, USD, EUR',
  paymentAccepted: 'Cash, Visa, Mastercard',
  areaServed: {
    '@type': 'Country',
    name: 'Sri Lanka',
  },
  hasMap: 'https://maps.google.com/?q=Lanka+Tours+and+Transfers', // ← replace with your GMB link
  sameAs: [
    'https://www.tripadvisor.com/Attraction_Review-g297896-d20911258-Reviews-Lanka_tours_transfers-Galle_Galle_District_Southern_Province.html',
    'https://www.facebook.com/YOUR_PAGE', // ← replace
    'https://www.instagram.com/YOUR_PAGE', // ← replace
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '300',
    bestRating: '5',
    worstRating: '1',
  },
};

// ─── WEBSITE SCHEMA (enables Google Sitelinks Search Box) ─────────────────────
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Lanka Tours & Transfers',
  url: 'https://www.lankatoursandtransfers.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.lankatoursandtransfers.com/tours?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ── Structured Data ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {/*
          SEO NOTE: The <main> tag here is the page landmark.
          The home page wraps everything in <></>, which is fine —
          screen readers and Google will still find the <main> here.
        */}
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}