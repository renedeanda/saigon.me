import Link from 'next/link';
import phrasesData from '@/data/phrases.json';
import { Coffee, Car, Utensils, Hand, ShoppingBag, AlertTriangle, BookOpen } from 'lucide-react';

const iconMap: { [key: string]: any } = {
  coffee: Coffee,
  car: Car,
  utensils: Utensils,
  'hand-wave': Hand,
  'shopping-bag': ShoppingBag,
  'alert-triangle': AlertTriangle,
};

export default async function LearnPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { situations } = phrasesData;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero with subtle pattern */}
      <section className="relative bg-white py-20 border-b border-gray-200">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Connect Through Language
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            Learning even basic Vietnamese opens doors to genuine friendships, deeper experiences, and unexpected connections. Start here.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                The Power of a Few Words
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  "Một cà phê sữa đá" — one iced milk coffee. Knowing how to say just this simple phrase opens doors in Saigon. Those four Vietnamese words can transform you from tourist to welcomed guest.
                </p>
                <p>
                  Language learning isn't just about ordering coffee or finding your way around. It's about connection. It's about showing respect. It's about opening yourself to a culture that will welcome you with genuine warmth.
                </p>
                <p className="text-center font-semibold text-xl text-gray-900 pt-4">
                  Start with just a few phrases. You never know what connections they'll create.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Situations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Learn by Situation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {situations.map((situation) => {
                const Icon = iconMap[situation.icon] || BookOpen;
                const phraseCount = situation.phrases.length;

                return (
                  <div
                    key={situation.id}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
                  >
                    <div className="bg-gray-50 p-6 text-center border-b border-gray-200">
                      <Icon className="w-12 h-12 mx-auto mb-3 text-primary" />
                      <h3 className="text-xl font-bold text-gray-900">{situation.name}</h3>
                      <p className="text-sm text-gray-600 mt-2">{phraseCount} essential phrases</p>
                    </div>

                    <div className="p-6">
                      <p className="text-gray-700 text-sm mb-4">{situation.description}</p>

                      {/* Cultural Note */}
                      <div className="bg-accent/10 border-l-4 border-accent p-3 mb-4">
                        <p className="text-xs font-semibold text-gray-700 mb-1">Cultural Note:</p>
                        <p className="text-xs text-gray-600">{situation.culturalNote}</p>
                      </div>

                      {/* Preview first phrase */}
                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <p className="text-lg font-bold text-gray-900">
                          {situation.phrases[0].vietnamese}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          {situation.phrases[0].pronunciation}
                        </p>
                        <p className="text-sm text-gray-800 mt-2">
                          "{situation.phrases[0].english}"
                        </p>
                      </div>

                      <Link
                        href={`/${locale}/learn/${situation.id}`}
                        className="block w-full text-center py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-primary transition-colors"
                      >
                        Learn These Phrases
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn Vietnamese */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Learn Vietnamese?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Earn Instant Respect</h3>
                <p className="text-gray-700">
                  Even basic attempts at Vietnamese show cultural awareness and earn you warmth from locals. You'll go from "tourist" to "friend" in seconds.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Better Experiences</h3>
                <p className="text-gray-700">
                  Ordering in Vietnamese gets you better food, better prices, and conversations that lead to hidden gems no guidebook mentions.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Make Real Connections</h3>
                <p className="text-gray-700">
                  Language is the bridge to genuine friendships. Vietnamese people appreciate the effort and will help you learn, often over coffee and laughter.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">It's Easier Than You Think</h3>
                <p className="text-gray-700">
                  You don't need fluency. 20-30 phrases will transform your Saigon experience. Start small, practice daily, and watch doors open.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
