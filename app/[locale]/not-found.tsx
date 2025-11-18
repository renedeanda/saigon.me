'use client';

import Link from 'next/link';
import { Home, MapPin, Compass } from 'lucide-react';
import { useLocale } from 'next-intl';

export default function NotFound() {
  // Get locale from client-side hook since this is a 404 page
  const locale = useLocale() || 'en';

  return (
    <div className="relative min-h-screen bg-white flex items-center justify-center px-4">
      {/* Subtle Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-2xl text-center relative z-10">
        {/* 404 with Vietnamese motif */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <div className="text-6xl mb-4">🏮</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Lost in the Alleys?
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            Even locals get lost in Saigon's hẻm sometimes.
          </p>
          <p className="text-gray-500">
            This page doesn't exist, but don't worry—let's get you back on track.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <Link
            href={`/${locale}/districts`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-all border-2 border-gray-200"
          >
            <MapPin className="w-5 h-5" />
            Explore Districts
          </Link>
          <Link
            href={`/${locale}/experiences`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-all border-2 border-gray-200"
          >
            <Compass className="w-5 h-5" />
            100 Experiences
          </Link>
        </div>

        {/* Fun fact */}
        <div className="mt-12 p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-900">Did you know?</span> Saigon has over 20,000 alleyways (hẻm).
            Getting lost is part of the adventure—just like you finding this 404 page!
          </p>
        </div>
      </div>
    </div>
  );
}
