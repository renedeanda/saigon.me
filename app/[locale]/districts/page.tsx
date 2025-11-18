import Link from 'next/link';
import districtsData from '@/data/districts.json';
import { MapPin } from 'lucide-react';

export default function DistrictsPage() {
  const { districts } = districtsData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero */}
      <section className="bg-gradient-to-r from-secondary via-primary to-accent py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Meet the Districts
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Each district has a personality—get to know the 7 characters that make up Saigon's story
          </p>
        </div>
      </section>

      {/* Districts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {districts.map((district) => (
              <Link
                key={district.id}
                href={`/districts/${district.slug}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden hover:scale-105 transform duration-300"
              >
                {/* Header with emoji and color */}
                <div
                  className="p-8 text-center"
                  style={{ backgroundColor: district.color + '20' }}
                >
                  <div className="text-7xl mb-4">{district.emoji}</div>
                  <h2 className="text-2xl font-bold text-gray-900">{district.name}</h2>
                  <p
                    className="text-lg font-semibold mt-2"
                    style={{ color: district.color }}
                  >
                    {district.nickname}
                  </p>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <p className="text-gray-700 italic">"{district.personality}"</p>

                  {/* Vibe Tags */}
                  <div className="flex flex-wrap gap-2">
                    {district.vibe.map((vibe) => (
                      <span
                        key={vibe}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {vibe}
                      </span>
                    ))}
                  </div>

                  {/* Best For */}
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-2">Best for:</p>
                    <div className="flex flex-wrap gap-2">
                      {district.bestFor.slice(0, 3).map((item) => (
                        <span
                          key={item}
                          className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 flex items-center justify-between">
                    <span className="text-secondary font-semibold group-hover:text-primary transition-colors">
                      Explore {district.name}
                    </span>
                    <MapPin className="w-5 h-5 text-secondary group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
