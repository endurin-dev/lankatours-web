// src/app/sitemap.ts
// Auto-generates /sitemap.xml at build time.
// Submit https://yourdomain.com/sitemap.xml to Google Search Console on launch day.

import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.lankatoursandtransfers.com'; // ← replace with your real domain

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Main pages ──────────────────────────────────────────────────────────
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/transfers`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/tours`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/scooters`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.80,
    },
    {
      url: `${BASE_URL}/shop`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.80,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },

    // ── Individual tour pages ────────────────────────────────────────────────
    // Add or remove slugs here as you create/delete tour pages
    {
      url: `${BASE_URL}/tours/sigiriya`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.90,
    },
    {
      url: `${BASE_URL}/tours/yala`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.90,
    },
    {
      url: `${BASE_URL}/tours/kandy`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.90,
    },
    {
      url: `${BASE_URL}/tours/ella`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.90,
    },
    {
      url: `${BASE_URL}/tours/whale`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/tours/galle`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.88,
    },
  ];
}