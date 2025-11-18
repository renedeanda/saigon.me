import { Heart } from 'lucide-react';
import { getAboutMetadata } from '@/lib/metadata';

export const metadata = getAboutMetadata();

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero with subtle yellow pattern */}
      <section className="relative bg-yellow-50 py-20 border-b border-gray-200">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="whitespace-nowrap">Sài Gòn.me</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            A love letter to the soul of Saigon
          </p>
        </div>
      </section>

      {/* Saigon vs HCMC Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Saigon vs. Ho Chi Minh City
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed">
                Let's clear this up right away: both names are correct, and which one you use tells a story.
              </p>

              <div className="bg-gray-50 rounded-xl p-8 my-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The History</h3>
                <p>
                  On April 30, 1975, when North Vietnamese forces entered the city, Saigon was officially renamed "Ho Chi Minh City" after the revolutionary leader. Overnight, maps changed, signs were replaced, and a new era began.
                </p>
                <p>
                  But here's the thing: you can change a name on paper, but you can't change what's in people's hearts. Saigonese—especially older generations—continued calling it Saigon. It was their city, their identity, their home. The name carried memories, pride, and a sense of place that transcended politics.
                </p>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Today: Both Names, One City</h3>
              <p>
                Walk around the city today and you'll hear both. Government buildings, official documents, and international flights say "Ho Chi Minh City." But locals, expats, and anyone who's lived here for more than a minute say "Saigon."
              </p>

              <p>
                It's not political anymore—it's practical. "Saigon" is shorter, easier to say, and rolls off the tongue naturally. "HCMC" sounds like an acronym from a corporate memo. "Saigon" sounds like a city with a soul.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-6 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What Should You Call It?</h3>
                <ul className="space-y-3 list-disc list-inside">
                  <li>
                    <strong>In conversation with locals:</strong> Say "Saigon." They'll appreciate it and know you're paying attention to the culture.
                  </li>
                  <li>
                    <strong>On official forms or bookings:</strong> Use "Ho Chi Minh City" or "HCMC" to avoid confusion.
                  </li>
                  <li>
                    <strong>When in doubt:</strong> Match your audience. If they say "Saigon," you say "Saigon." If they say "HCMC," follow their lead.
                  </li>
                </ul>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Why It Matters</h3>
              <p>
                This isn't just about semantics. The choice of name reflects identity, history, and resilience. Saigon is a city that's been through war, transformation, rapid modernization, and waves of change—yet its spirit remains unbroken.
              </p>

              <p>
                Calling it "Saigon" honors that spirit. It's a nod to the generations who built this city, the street vendors who wake at 4 AM, the motorbike drivers navigating impossible traffic, the families running pho stalls for 50 years. It's respect wrapped in two syllables.
              </p>

              <div className="bg-gray-50 rounded-xl p-8 text-center my-12 border border-gray-200">
                <p className="text-2xl font-bold text-gray-900 mb-4">
                  So when we say "Saigon.me," we're celebrating ALL of it:
                </p>
                <p className="text-xl text-gray-700">
                  The official history and the street-level reality. The old name and the new. The resilience, the chaos, the beauty, the hustle. The soul of a city that refuses to be defined by any single story.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About This Project */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              About This Project
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-xl">
                Saigon.me isn't your typical travel guide. It's a celebration—of the districts that each have their own personality, the 100 experiences that will make you fall in love, and the language that connects it all.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="text-4xl mb-4">🎒</div>
                  <h3 className="font-bold text-gray-900 mb-2">For First-Timers</h3>
                  <p className="text-gray-600 text-sm">
                    Navigate the overwhelming beauty of Saigon with personality-driven guides that actually help.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="text-4xl mb-4">🌏</div>
                  <h3 className="font-bold text-gray-900 mb-2">For Expats</h3>
                  <p className="text-gray-600 text-sm">
                    Go deeper. Discover districts beyond 1, learn the language, find hidden gems only locals know.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="text-4xl mb-4">🏠</div>
                  <h3 className="font-bold text-gray-900 mb-2">For Locals</h3>
                  <p className="text-gray-600 text-sm">
                    See your city through fresh eyes. Take pride in how we celebrate Saigon's incredible spirit.
                  </p>
                </div>
              </div>

              <p className="text-center text-gray-600 italic">
                Created with <Heart className="inline w-5 h-5 text-red-500 fill-red-500" /> for anyone who's fallen under Saigon's spell.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
