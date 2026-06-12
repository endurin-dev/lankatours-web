// src/app/robots.ts
// Auto-generates /robots.txt
// Tells search engine crawlers which pages to index and where the sitemap is.

import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.lankatoursandtransfers.com'; // ← replace with your real domain

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Block dev/internal pages from being indexed
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}