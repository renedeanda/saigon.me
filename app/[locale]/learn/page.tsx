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

export default function LearnPage() {
  const { situations } = phrasesData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero */}
      <section className="bg-gradient-to-r from-secondary via-primary to-accent py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Connect Through Language
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Learning even basic Vietnamese opens doors to genuine friendships, deeper experiences, and unexpected connections. Start here.
          </p>
        </div>
      </section>

      {/* Love Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                The Power of a Few Words
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  "Một cà phê sữa đá" — one iced milk coffee. That's all I knew how to say when I first arrived in Saigon. But those four Vietnamese words opened doors I never expected...
                </p>
                <p>
                  Language learning isn't just about ordering coffee or finding your way around. It's about connection. It's about showing respect. It's about opening yourself to a culture that will welcome you with warmth you never imagined.
                </p>
                <p className="text-center font-semibold text-xl text-secondary pt-4">
                  Start with just a few phrases. You never know what story they'll lead to. ❤️
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
                    <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-6 text-center">
                      <Icon className="w-12 h-12 mx-auto mb-3 text-secondary" />
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
                        href={`/learn/${situation.id}`}
                        className="block w-full text-center py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-primary hover:text-secondary transition-colors"
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
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Earn Instant Respect</h3>
                <p className="text-gray-700">
                  Even basic attempts at Vietnamese show cultural awareness and earn you warmth from locals. You'll go from "tourist" to "friend" in seconds.
                </p>
              </div>
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Better Experiences</h3>
                <p className="text-gray-700">
                  Ordering in Vietnamese gets you better food, better prices, and conversations that lead to hidden gems no guidebook mentions.
                </p>
              </div>
              <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Make Real Connections</h3>
                <p className="text-gray-700">
                  Language is the bridge to genuine friendships. Vietnamese people appreciate the effort and will help you learn, often over coffee and laughter.
                </p>
              </div>
              <div className="bg-gradient-to-br from-success/10 to-success/5 rounded-lg p-6">
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
