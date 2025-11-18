import { notFound } from 'next/navigation';
import districtsData from '@/data/districts.json';
import Link from 'next/link';
import { MapPin, Clock, Sparkles, Lightbulb, ArrowLeft } from 'lucide-react';

interface Props {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

export function generateStaticParams() {
  return districtsData.districts.map((district) => ({
    slug: district.slug,
  }));
}

export default async function DistrictPage({ params }: Props) {
  const { slug, locale } = await params;
  const district = districtsData.districts.find((d) => d.slug === slug);

  if (!district) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="py-20 relative overflow-hidden bg-white border-b border-gray-200"
      >
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundColor: district.color,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <Link
            href={`/${locale}/districts`}
            className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to all districts
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-6 mb-6">
              <span className="text-8xl">{district.emoji}</span>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                  {district.name}
                </h1>
                <p className="text-2xl font-semibold mt-2" style={{ color: district.color }}>
                  {district.nickname}
                </p>
              </div>
            </div>

            <p className="text-xl text-gray-700 italic leading-relaxed">
              "{district.personality}"
            </p>

            {/* Vibe Tags */}
            <div className="flex flex-wrap gap-3 mt-6">
              {district.vibe.map((vibe) => (
                <span
                  key={vibe}
                  className="px-4 py-2 bg-white rounded-full text-gray-800 font-medium shadow-sm"
                >
                  {vibe}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {district.description.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-gray-700 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <MapPin className="w-8 h-8 text-primary" />
              Neighborhoods
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {district.neighborhoods.map((neighborhood) => (
                <div
                  key={neighborhood.name}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {neighborhood.name}
                  </h3>
                  <p className="text-gray-600 mb-3">{neighborhood.description}</p>
                  <p className="text-sm text-primary font-medium">{neighborhood.vibe}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Famous For & Hidden Gems */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Famous For */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Sparkles className="w-8 h-8 text-secondary" />
                Famous For
              </h2>
              <ul className="space-y-3">
                {district.famousFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-secondary text-xl">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hidden Gems */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Lightbulb className="w-8 h-8 text-accent" />
                Hidden Gems
              </h2>
              <div className="space-y-6">
                {district.hiddenGems.map((gem) => (
                  <div key={gem.name} className="border-l-4 border-accent pl-4">
                    <h3 className="font-bold text-gray-900 mb-1">{gem.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{gem.description}</p>
                    <p className="text-accent text-sm font-medium">💡 {gem.tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Info */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* When to Visit */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Clock className="w-6 h-6 text-primary" />
                When to Visit
              </h3>
              <p className="text-gray-700">{district.whenToVisit}</p>
            </div>

            {/* Getting There */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-primary" />
                Getting There
              </h3>
              <p className="text-gray-700">{district.gettingThere}</p>
            </div>

            {/* Local Saying */}
            <div
              className="rounded-lg p-6 shadow-sm bg-white border-2"
              style={{ borderColor: district.color }}
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900">Local Saying</h3>
              <p className="text-2xl font-bold mb-2 text-gray-900">{district.localSaying.vietnamese}</p>
              <p className="text-gray-600 mb-2">{district.localSaying.pronunciation}</p>
              <p className="text-lg mb-2 text-gray-900">"{district.localSaying.english}"</p>
              <p className="text-gray-700 text-sm">{district.localSaying.context}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Did You Know */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Did You Know?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {district.didYouKnow.map((fact, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                >
                  <p className="text-gray-800">{fact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
