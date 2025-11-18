// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';



const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lanka Tours and Transfers',
  description: 'Your one-stop travel solution in Sri Lanka',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}