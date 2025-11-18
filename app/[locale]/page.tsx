import Link from 'next/link';
import { ArrowRight, MapPin, Coffee, BookOpen } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-lg">
                <span className="block">Welcome to</span>
                <span className="block text-primary drop-shadow-2xl">Sài Gòn</span>
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 font-light">
                Where every street tells a story
              </p>
            </div>

            {/* Rotating Taglines */}
            <div className="text-xl md:text-2xl text-white/80 font-light space-y-2">
              <p className="animate-pulse">🏮 The city that never stops hustling</p>
              <p className="animate-pulse" style={{ animationDelay: '0.5s' }}>🛵 Where motorbikes dance and coffee flows</p>
              <p className="animate-pulse" style={{ animationDelay: '1s' }}>❤️ A love letter to the soul of Vietnam</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link
                href="/districts"
                className="group px-8 py-4 bg-white text-secondary rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2"
              >
                <MapPin className="w-5 h-5" />
                Meet the Districts
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/experiences"
                className="group px-8 py-4 bg-secondary text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2"
              >
                <Coffee className="w-5 h-5" />
                100 Ways to Fall in Love
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/learn"
                className="group px-8 py-4 bg-accent text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                Learn Vietnamese
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Quick Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              The Soul of Sài Gòn
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              This isn't just another travel guide. This is a celebration—of the districts that each have their own personality, the 100 experiences that will make you fall in love, and the language that connects it all. Whether you're visiting for the first time, living here as an expat, or a local curious about how foreigners see your city, welcome home.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Districts Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet the Districts
            </h2>
            <p className="text-xl text-gray-600">
              Each district has a personality—get to know them
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* District 1 */}
            <Link
              href="/districts/district-1"
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 hover:scale-105"
            >
              <div className="text-6xl mb-4">💼</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">District 1</h3>
              <p className="text-primary font-semibold mb-3">The Overachiever</p>
              <p className="text-gray-600">
                All business, always hustling—the heart of Saigon's energy
              </p>
            </Link>

            {/* District 3 */}
            <Link
              href="/districts/district-3"
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 hover:scale-105"
            >
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">District 3</h3>
              <p className="text-accent font-semibold mb-3">The Artist</p>
              <p className="text-gray-600">
                Creative, thoughtful, and home to Saigon's coolest cafes
              </p>
            </Link>

            {/* District 4 */}
            <Link
              href="/districts/district-4"
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 hover:scale-105"
            >
              <div className="text-6xl mb-4">🍜</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">District 4</h3>
              <p className="text-success font-semibold mb-3">The Foodie</p>
              <p className="text-gray-600">
                Authentic, local, and utterly delicious—street food paradise
              </p>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/districts"
              className="inline-flex items-center gap-2 text-lg font-semibold text-secondary hover:text-primary transition-colors"
            >
              Explore all 7 districts
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
