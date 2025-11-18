import Link from 'next/link';
import { Home, MapPin, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
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
            href="/en"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <Link
            href="/en/districts"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-all border-2 border-gray-200"
          >
            <MapPin className="w-5 h-5" />
            Explore Districts
          </Link>
          <Link
            href="/en/experiences"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-all border-2 border-gray-200"
          >
            <Compass className="w-5 h-5" />
            100 Experiences
          </Link>
        </div>

        {/* Fun fact */}
        <div className="mt-12 p-6 bg-white rounded-xl border border-gray-200">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-900">Did you know?</span> Saigon has over 20,000 alleyways (hẻm).
            Getting lost is part of the adventure—just like you finding this 404 page! 😊
          </p>
        </div>
      </div>
    </div>
  );
}
