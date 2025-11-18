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

      {/* Practical Learning Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Quick Learning Tips
            </h2>

            {/* Tones Explanation */}
            <div className="bg-white rounded-xl p-8 mb-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Understanding Vietnamese Tones</h3>
              <p className="text-gray-700 mb-4">
                Vietnamese has 6 tones, and they change the meaning completely. Don't worry—you don't need to be perfect. Locals will understand from context, and your effort matters more than precision.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-bold text-gray-900 mb-1">Mid Level (a)</p>
                  <p className="text-gray-600 text-sm">Flat, neutral tone</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-bold text-gray-900 mb-1">Rising (á)</p>
                  <p className="text-gray-600 text-sm">Voice goes up, like asking a question</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-bold text-gray-900 mb-1">Falling (à)</p>
                  <p className="text-gray-600 text-sm">Voice drops down</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-bold text-gray-900 mb-1">Question (ả)</p>
                  <p className="text-gray-600 text-sm">Starts down, then rises</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-bold text-gray-900 mb-1">Tumbling (ã)</p>
                  <p className="text-gray-600 text-sm">Wave pattern</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-bold text-gray-900 mb-1">Sharp (ạ)</p>
                  <p className="text-gray-600 text-sm">Cut short, glottal stop</p>
                </div>
              </div>
              <div className="mt-6 bg-primary/5 border-l-4 border-primary p-4">
                <p className="text-sm text-gray-700">
                  <strong>Pro Tip:</strong> Use the pronunciation buttons throughout this site to hear native pronunciation. Listen multiple times and repeat out loud—speaking activates different parts of your brain than just reading.
                </p>
              </div>
            </div>

            {/* Common Mistakes */}
            <div className="bg-white rounded-xl p-8 mb-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes to Avoid</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">❌</span>
                  <div>
                    <p className="font-semibold text-gray-900">Mixing up "cà phê" (coffee) with "cá phê" (wrong!)</p>
                    <p className="text-gray-600 text-sm">The tones matter! "Cà phê" gets you coffee. "Cá phê" is nonsense.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">❌</span>
                  <div>
                    <p className="font-semibold text-gray-900">Using "tôi" (I) with everyone</p>
                    <p className="text-gray-600 text-sm">Vietnamese uses different pronouns based on age and context. "Tôi" is formal. With friends or vendors, use "anh/chị" (I'm older) or "em" (I'm younger). When in doubt, use "tôi"—it's not wrong, just formal.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">❌</span>
                  <div>
                    <p className="font-semibold text-gray-900">Skipping "xin" when being polite</p>
                    <p className="text-gray-600 text-sm">"Cảm ơn" means thanks. "Xin cảm ơn" means "please accept my thanks"—much more polite. Add "xin" when you want to be extra respectful.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <p className="font-semibold text-gray-900">Remember: Effort beats perfection</p>
                    <p className="text-gray-600 text-sm">Vietnamese speakers appreciate ANY attempt. A smile + trying = instant connection. Don't let fear of mistakes stop you from speaking.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Your First 7 Days */}
            <div className="bg-primary/5 rounded-xl p-8 border-2 border-primary">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Your First 7 Days in Saigon: A Language Plan</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-gray-900">Day 1: Master "Cảm ơn" (thank you)</p>
                  <p className="text-gray-600 text-sm">Use it everywhere. Cashiers, drivers, waiters. Say it 50 times today.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-gray-900">Day 2: Add "Xin chào" (hello)</p>
                  <p className="text-gray-600 text-sm">Greet every shopkeeper. Smile when you say it. Watch faces light up.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-gray-900">Day 3: Order coffee in Vietnamese</p>
                  <p className="text-gray-600 text-sm">"Một cà phê sữa đá" (one iced milk coffee). Practice at 3 different cafes.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-gray-900">Day 4: Learn to say "How much?"</p>
                  <p className="text-gray-600 text-sm">"Bao nhiêu tiền?" Use it at markets. Bonus: prices might drop.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-gray-900">Day 5: Add "Không cay" (not spicy)</p>
                  <p className="text-gray-600 text-sm">If you don't handle heat well, this phrase will save you. Food vendors will respect it.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-gray-900">Day 6: Practice "Excuse me"</p>
                  <p className="text-gray-600 text-sm">"Xin lỗi" when navigating crowds. Vietnamese cities are busy—this helps you move politely.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-gray-900">Day 7: Combine everything</p>
                  <p className="text-gray-600 text-sm">Order a meal entirely in Vietnamese. Greet, order, thank. You've got this.</p>
                </div>
              </div>
              <div className="mt-6 bg-white p-4 rounded-lg border-2 border-primary">
                <p className="text-sm text-gray-700">
                  <strong className="text-primary">Week 2 Goal:</strong> Have a 30-second conversation with a local in Vietnamese. It can be about weather, coffee, or just pleasantries. The goal is speaking, not perfection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
