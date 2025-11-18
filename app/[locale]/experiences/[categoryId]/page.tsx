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
  const { categoryId, locale } = await params;
  const category = experiencesData.categories.find((c) => c.id === categoryId);

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-yellow-50 py-16 border-b border-gray-200">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <Link
            href={`/${locale}/experiences`}
            className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to all experiences
          </Link>

          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              {category.name}
            </h1>
            <p className="text-xl text-gray-600">
              {category.description}
            </p>
            <div className="mt-4 text-gray-600">
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
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <div className="flex items-center gap-2 mb-3">
                        <MessageCircle className="w-5 h-5 text-primary" />
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
