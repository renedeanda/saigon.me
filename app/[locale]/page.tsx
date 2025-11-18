import Link from 'next/link';
import { ArrowRight, MapPin, Coffee, BookOpen } from 'lucide-react';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className="relative">
      {/* Hero Section - Subtle Red Background with Polka Dot Pattern */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-red-50 pb-20 md:pb-24 pt-12 md:pt-16">
        {/* Subtle Polka Dot Pattern Background with Red */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23DC2626' fill-opacity='1'%3E%3Ccircle cx='10' cy='10' r='3'/%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Motor Scooter Icon */}
            <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full mb-4">
              <span className="text-5xl">🛵</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight">
                Welcome to <span className="text-primary whitespace-nowrap">Sài Gòn</span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600 font-light">
                Where every street tells a story
              </p>
            </div>

            {/* Taglines - More Subtle */}
            <div className="text-lg md:text-xl text-gray-500 space-y-2 max-w-2xl mx-auto">
              <p>The city that never stops hustling</p>
              <p>Where motorbikes dance and coffee flows</p>
              <p>A love letter to the soul of Vietnam</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link
                href={`/${locale}/districts`}
                className="group px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
              >
                <MapPin className="w-5 h-5" />
                Meet the Districts
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={`/${locale}/experiences`}
                className="group px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-lg font-semibold text-lg hover:border-primary hover:text-primary transition-all flex items-center gap-2"
              >
                <Coffee className="w-5 h-5" />
                100 Ways to Fall in Love
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={`/${locale}/learn`}
                className="group px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-lg font-semibold text-lg hover:border-accent hover:text-accent transition-all flex items-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                Learn Vietnamese
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Intro Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              The Soul of <span className="whitespace-nowrap">Sài Gòn</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              This isn't just another travel guide. This is a celebration—of the districts that each have their own personality, the 100 experiences that will make you fall in love, and the language that connects us all. Whether you're visiting for the first time, living here as an expat, or a local curious about how foreigners see your city, welcome home.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Districts Preview */}
      <section className="py-20 bg-gray-50">
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
              href={`/${locale}/districts/district-1`}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all p-8 border border-gray-100 hover:border-primary"
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
              href={`/${locale}/districts/district-3`}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all p-8 border border-gray-100 hover:border-accent"
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
              href={`/${locale}/districts/district-4`}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all p-8 border border-gray-100 hover:border-success"
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
              href={`/${locale}/districts`}
              className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Explore all 8 districts
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
