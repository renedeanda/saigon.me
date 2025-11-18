import { notFound } from 'next/navigation';
import phrasesData from '@/data/phrases.json';
import Link from 'next/link';
import { ArrowLeft, Lightbulb, Info } from 'lucide-react';
import { PronunciationButton } from '@/components/PronunciationButton';

interface Props {
  params: Promise<{
    situationId: string;
    locale: string;
  }>;
}

export function generateStaticParams() {
  return phrasesData.situations.map((situation) => ({
    situationId: situation.id,
  }));
}

export default async function SituationPage({ params }: Props) {
  const { situationId, locale } = await params;
  const situation = phrasesData.situations.find((s) => s.id === situationId);

  if (!situation) {
    notFound();
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-white py-16 border-b border-gray-200">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <Link
            href={`/${locale}/learn`}
            className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to all situations
          </Link>

          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              {situation.name}
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              {situation.description}
            </p>

            {/* Cultural Note */}
            <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Cultural Context:</p>
                  <p className="text-gray-700">{situation.culturalNote}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phrases */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {situation.phrases.map((phrase, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="p-8">
                  {/* Difficulty Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(
                        phrase.difficulty
                      )}`}
                    >
                      {phrase.difficulty}
                    </span>
                    <PronunciationButton text={phrase.vietnamese} />
                  </div>

                  {/* Vietnamese Phrase */}
                  <div className="mb-6">
                    <p className="text-4xl font-bold text-gray-900 mb-3">
                      {phrase.vietnamese}
                    </p>
                    <p className="text-xl text-gray-600 mb-2">
                      {phrase.pronunciation}
                    </p>
                    <p className="text-sm text-gray-500 italic">
                      Literal: "{phrase.literal}"
                    </p>
                  </div>

                  {/* English Translation */}
                  <div className="bg-primary/5 rounded-lg p-4 mb-4 border border-gray-200">
                    <p className="text-2xl text-gray-900">
                      "{phrase.english}"
                    </p>
                  </div>

                  {/* When to Use */}
                  <div className="bg-secondary/10 border-l-4 border-secondary p-4 mb-4">
                    <p className="font-semibold text-gray-800 mb-1">When to use:</p>
                    <p className="text-gray-700">{phrase.whenToUse}</p>
                  </div>

                  {/* Cultural Tip */}
                  <div className="bg-accent/10 border-l-4 border-accent p-4">
                    <div className="flex items-start gap-2">
                      <Lightbulb className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-800 mb-1">Cultural Tip:</p>
                        <p className="text-gray-700">{phrase.culturalTip}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Tips */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Practice Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">Start Simple</h3>
                <p className="text-gray-700 text-sm">
                  Master 2-3 phrases before moving on. Use them in real situations. Confidence comes from repetition, not memorization.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">Embrace Mistakes</h3>
                <p className="text-gray-700 text-sm">
                  Vietnamese people are incredibly patient and supportive. Your accent will be off—that's okay. Effort matters more than perfection.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">Use It Daily</h3>
                <p className="text-gray-700 text-sm">
                  Order coffee in Vietnamese every morning. Say thank you in Vietnamese every time. Language lives in practice, not textbooks.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">Ask for Help</h3>
                <p className="text-gray-700 text-sm">
                  "How do you say...?" is a powerful phrase. Locals love teaching their language and will become your best teachers over coffee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
