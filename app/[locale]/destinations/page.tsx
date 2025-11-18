import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { MapPin, Mountain, Waves, Palmtree, Building2, Crown } from 'lucide-react';
import citiesData from '@/data/cities.json';
import { getDestinationsPageMetadata } from '@/lib/metadata';

export const metadata = getDestinationsPageMetadata();

interface Props {
  params: Promise<{ locale: string }>;
}

const regionIcons: { [key: string]: React.ReactNode } = {
  'Central Vietnam': <MapPin className="w-6 h-6" />,
  'Central Highlands': <Mountain className="w-6 h-6" />,
  'Southern Vietnam': <Waves className="w-6 h-6" />,
  'Northern Vietnam': <Building2 className="w-6 h-6" />,
  'Central Coast': <Waves className="w-6 h-6" />,
  'Southern Islands': <Palmtree className="w-6 h-6" />,
  'Northern Highlands': <Mountain className="w-6 h-6" />,
  'Southern Coast': <Waves className="w-6 h-6" />,
};

export default async function DestinationsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const { cities } = citiesData;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-yellow-50 py-20 border-b border-gray-200">
        {/* Polka dot pattern background */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="polka-dots" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle fill="#DC143C" cx="25" cy="25" r="3" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6 animate-float">🗺️</div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Where to Go in Vietnam
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              From misty mountains to tropical islands, ancient cities to modern metropolises—
              discover Vietnam&apos;s most amazing destinations. Each city offers its own unique charm,
              culture, and unforgettable experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cities.map((city) => (
              <Link
                key={city.id}
                href={`/${locale}/destinations/${city.slug}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-primary hover:scale-105"
              >
                {/* Card Header with Color */}
                <div
                  className="h-32 flex items-center justify-center relative overflow-hidden"
                  style={{ backgroundColor: city.color }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                  <div className="text-7xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {city.emoji}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    {regionIcons[city.region]}
                    <span>{city.region}</span>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {city.name}
                  </h2>

                  <p className="text-sm font-medium text-gray-500 mb-4 italic">
                    &ldquo;{city.nickname}&rdquo;
                  </p>

                  <p className="text-gray-600 leading-relaxed line-clamp-3 mb-4">
                    {city.description}
                  </p>

                  {/* Vibe Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {city.vibe.slice(0, 3).map((vibe, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                      >
                        {vibe}
                      </span>
                    ))}
                  </div>

                  {/* Call to Action */}
                  <div className="flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all">
                    Explore {city.name}
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Overview */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Explore by Region
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Northern Vietnam */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-8 h-8 text-red-500" />
                  <h3 className="text-2xl font-bold text-gray-900">Northern Vietnam</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  Discover the cultural heart of Vietnam with ancient capitals, stunning mountains,
                  and terraced rice fields.
                </p>
                <div className="flex flex-wrap gap-2">
                  {cities
                    .filter((c) => c.region === 'Northern Vietnam' || c.region === 'Northern Highlands')
                    .map((c) => (
                      <Link
                        key={c.id}
                        href={`/${locale}/destinations/${c.slug}`}
                        className="text-primary hover:underline font-medium"
                      >
                        {c.name}
                      </Link>
                    ))}
                </div>
              </div>

              {/* Central Vietnam */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Crown className="w-8 h-8 text-purple-500" />
                  <h3 className="text-2xl font-bold text-gray-900">Central Vietnam</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  Explore imperial cities, UNESCO heritage sites, pristine beaches, and mountain retreats.
                </p>
                <div className="flex flex-wrap gap-2">
                  {cities
                    .filter(
                      (c) =>
                        c.region === 'Central Vietnam' ||
                        c.region === 'Central Highlands' ||
                        c.region === 'Central Coast'
                    )
                    .map((c) => (
                      <Link
                        key={c.id}
                        href={`/${locale}/destinations/${c.slug}`}
                        className="text-primary hover:underline font-medium"
                      >
                        {c.name}
                      </Link>
                    ))}
                </div>
              </div>

              {/* Southern Vietnam */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Waves className="w-8 h-8 text-blue-500" />
                  <h3 className="text-2xl font-bold text-gray-900">Southern Vietnam</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  Experience tropical beaches, coastal escapes, and easy access from Ho Chi Minh City.
                </p>
                <div className="flex flex-wrap gap-2">
                  {cities
                    .filter((c) => c.region === 'Southern Vietnam' || c.region === 'Southern Coast')
                    .map((c) => (
                      <Link
                        key={c.id}
                        href={`/${locale}/destinations/${c.slug}`}
                        className="text-primary hover:underline font-medium"
                      >
                        {c.name}
                      </Link>
                    ))}
                </div>
              </div>

              {/* Islands */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Palmtree className="w-8 h-8 text-green-500" />
                  <h3 className="text-2xl font-bold text-gray-900">Island Paradises</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  Escape to pristine islands with white-sand beaches, crystal waters, and tropical vibes.
                </p>
                <div className="flex flex-wrap gap-2">
                  {cities
                    .filter((c) => c.region === 'Southern Islands')
                    .map((c) => (
                      <Link
                        key={c.id}
                        href={`/${locale}/destinations/${c.slug}`}
                        className="text-primary hover:underline font-medium"
                      >
                        {c.name}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Planning Your Vietnam Journey
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🌤️ Best Time to Visit</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Vietnam&apos;s climate varies by region. North (Hanoi, Sapa): Oct-Apr for cool, dry weather.
                    Central (Hoi An, Hue, Da Nang): Feb-May for sunshine. South (Saigon, beaches): Nov-Apr
                    for minimal rain.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">✈️ Getting Around</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Domestic flights connect major cities quickly. Trains offer scenic routes along the coast.
                    Buses are budget-friendly for shorter distances. Many travelers combine multiple transport
                    methods for the full experience.
                  </p>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">⏱️ How Much Time?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Minimum 2-3 weeks to see highlights. 1 week for north OR south. Add 3-5 days per region
                    you want to explore deeply. Consider travel time between destinations when planning.
                  </p>
                </div>

                <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🎒 Travel Tips</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Book accommodations in advance during peak season. Learn basic Vietnamese phrases.
                    Carry small bills for street food. Download offline maps. Pack layers for varying
                    climates across regions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
