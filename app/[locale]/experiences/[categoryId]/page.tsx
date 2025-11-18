import { notFound } from 'next/navigation';
import experiencesData from '@/data/experiences.json';
import Link from 'next/link';
import { ArrowLeft, MapPin, Clock, DollarSign, MessageCircle } from 'lucide-react';

interface Props {
  params: Promise<{
    categoryId: string;
    locale: string;
  }>;
}

export function generateStaticParams() {
  return experiencesData.categories.map((category) => ({
    categoryId: category.id,
  }));
}

export default async function CategoryPage({ params }: Props) {
  const { categoryId } = await params;
  const category = experiencesData.categories.find((c) => c.id === categoryId);

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-secondary to-primary py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/experiences"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to all experiences
          </Link>

          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold text-white mb-4">
              {category.name}
            </h1>
            <p className="text-xl text-white/90">
              {category.description}
            </p>
            <div className="mt-4 text-white/80">
              {category.experiences.length} experiences in this category
            </div>
          </div>
        </div>
      </section>

      {/* Experiences List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {category.experiences.map((experience, idx) => (
              <div
                key={experience.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                        <span className="text-2xl">#{idx + 1}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {experience.title}
                      </h2>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {experience.district}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {experience.time}
                        </span>
                        {experience.price && (
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            {experience.price}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {experience.description}
                  </p>

                  {/* Vibe Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {experience.vibe.split(', ').map((vibe) => (
                      <span
                        key={vibe}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                      >
                        {vibe}
                      </span>
                    ))}
                  </div>

                  {/* Tip */}
                  <div className="bg-primary/10 border-l-4 border-primary p-4 mb-4">
                    <p className="text-sm font-semibold text-gray-800 mb-1">💡 Pro Tip</p>
                    <p className="text-gray-700">{experience.tip}</p>
                  </div>

                  {/* Vietnamese Phrase */}
                  {experience.vietnamesePhrase && (
                    <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <MessageCircle className="w-5 h-5 text-secondary" />
                        <p className="font-semibold text-gray-800">Learn to say it:</p>
                      </div>
                      <p className="text-2xl font-bold text-gray-900 mb-2">
                        {experience.vietnamesePhrase.phrase}
                      </p>
                      <p className="text-gray-600 mb-2">
                        Pronunciation: {experience.vietnamesePhrase.pronunciation}
                      </p>
                      <p className="text-gray-800 mb-2">
                        "{experience.vietnamesePhrase.meaning}"
                      </p>
                      <p className="text-sm text-gray-600 italic">
                        {experience.vietnamesePhrase.whenToUse}
                      </p>
                    </div>
                  )}

                  {/* Address if available */}
                  {'address' in experience && experience.address && (
                    <div className="mt-4 text-sm text-gray-600">
                      📍 {experience.address}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
