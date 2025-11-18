import Link from 'next/link';
import experiencesData from '@/data/experiences.json';
import { Coffee, Map, Utensils, Heart, Bike } from 'lucide-react';

const iconMap: { [key: string]: any } = {
  sunrise: Coffee,
  map: Map,
  utensils: Utensils,
  heart: Heart,
  bike: Bike,
};

export default function ExperiencesPage() {
  const { categories } = experiencesData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero */}
      <section className="bg-gradient-to-r from-secondary via-primary to-accent py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            100 Ways to Fall in Love
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Not restaurants. Not landmarks. Moments. Specific, hyper-real experiences that capture the soul of Saigon.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {categories.map((category) => {
              const Icon = iconMap[category.icon] || Coffee;
              const experienceCount = category.experiences.length;

              return (
                <div
                  key={category.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
                >
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 text-center">
                    <Icon className="w-16 h-16 mx-auto mb-4 text-secondary" />
                    <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
                    <p className="text-primary font-semibold mt-2">
                      {experienceCount} experiences
                    </p>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-700 mb-6">{category.description}</p>

                    {/* Preview first 2 experiences */}
                    <div className="space-y-3 mb-4">
                      {category.experiences.slice(0, 2).map((exp) => (
                        <div key={exp.id} className="text-sm">
                          <p className="font-semibold text-gray-800">{exp.title}</p>
                          <p className="text-gray-500 text-xs">{exp.district} • {exp.time}</p>
                        </div>
                      ))}
                      <p className="text-xs text-gray-400">
                        +{experienceCount - 2} more experiences
                      </p>
                    </div>

                    <Link
                      href={`/experiences/${category.id}`}
                      className="block w-full text-center py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-primary hover:text-secondary transition-colors"
                    >
                      Explore {category.name}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              Not Your Typical Guide
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              These aren't generic "top 10" lists. Each experience is specific—a dish at a specific time from a specific vendor. A route, not a destination. A moment, not a landmark. We tell you WHEN to go, WHAT to say, and WHY it matters. This is Saigon at street level, experienced through all five senses.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
