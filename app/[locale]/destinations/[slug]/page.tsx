import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import {
  MapPin,
  Calendar,
  Plane,
  Lightbulb,
  Star,
  ArrowLeft,
  Volume2,
} from 'lucide-react';
import citiesData from '@/data/cities.json';
import { getCityMetadata } from '@/lib/metadata';
import { PronunciationButton } from '@/components/PronunciationButton';

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return citiesData.cities.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const city = citiesData.cities.find((c) => c.slug === slug);

  if (!city) {
    return {};
  }

  return getCityMetadata(city.name, city.nickname, city.description);
}

export default async function CityPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const city = citiesData.cities.find((c) => c.slug === slug);

  if (!city) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="py-20 relative overflow-hidden border-b border-gray-200"
        style={{ backgroundColor: city.color + '20' }}
      >
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="polka-dots"
                x="0"
                y="0"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <circle fill={city.color} cx="25" cy="25" r="3" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link
            href={`/${locale}/destinations`}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Destinations
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-8xl animate-float">{city.emoji}</div>
              <div>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg">{city.region}</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
                  {city.name}
                </h1>
                <p className="text-2xl text-gray-600 italic">&ldquo;{city.nickname}&rdquo;</p>
              </div>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed mb-6">{city.description}</p>

            {/* Vibe Tags */}
            <div className="flex flex-wrap gap-2">
              {city.vibe.map((vibe, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full font-semibold border-2"
                  style={{ borderColor: city.color }}
                >
                  {vibe}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Go Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Star className="w-10 h-10" style={{ color: city.color }} />
              Why Go to {city.name}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {city.whyGo.map((reason, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <span
                    className="text-2xl mt-1 flex-shrink-0"
                    style={{ color: city.color }}
                  >
                    ✓
                  </span>
                  <span className="text-lg leading-relaxed">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Top Attractions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Top Attractions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {city.topAttractions.map((attraction, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4"
                  style={{ borderColor: city.color }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {attraction.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{attraction.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practical Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Practical Information</h2>

            <div className="space-y-8">
              {/* When to Visit */}
              <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-200">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-8 h-8 text-yellow-600" />
                  <h3 className="text-2xl font-bold text-gray-900">When to Visit</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">{city.whenToVisit}</p>
              </div>

              {/* How to Get There */}
              <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <Plane className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">How to Get There</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">{city.howToGetThere}</p>
              </div>

              {/* Local Tips */}
              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-8 h-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Local Tips</h3>
                </div>
                <ul className="space-y-3">
                  {city.localTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700 text-lg">
                      <span className="text-green-600 font-bold flex-shrink-0">•</span>
                      <span className="leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Saying */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-4" style={{ borderColor: city.color }}>
              <div className="flex items-center gap-3 mb-6">
                <Volume2 className="w-8 h-8" style={{ color: city.color }} />
                <h2 className="text-3xl font-bold text-gray-900">Local Saying</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <p className="text-3xl font-bold text-gray-900">
                    {city.localSaying.vietnamese}
                  </p>
                  <PronunciationButton text={city.localSaying.vietnamese} />
                </div>

                <p className="text-xl text-gray-600 italic">
                  &ldquo;{city.localSaying.pronunciation}&rdquo;
                </p>

                <p className="text-2xl font-semibold" style={{ color: city.color }}>
                  {city.localSaying.english}
                </p>

                <p className="text-gray-600 leading-relaxed text-lg pt-4 border-t border-gray-200">
                  {city.localSaying.context}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Did You Know */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Did You Know?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {city.didYouKnow.map((fact, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-md"
                >
                  <div className="text-4xl mb-3">💡</div>
                  <p className="text-gray-700 leading-relaxed">{fact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Explore More */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Explore More Destinations
            </h2>
            <Link
              href={`/${locale}/destinations`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:scale-105 transition-all shadow-lg"
            >
              View All Destinations
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
