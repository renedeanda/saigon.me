'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, RefreshCcw, MapPin } from 'lucide-react';
import districtsData from '@/data/districts.json';

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    districts: string[]; // district IDs this answer points to
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "It's your first morning in Saigon. What do you do?",
    options: [
      { text: "Hit the iconic landmarks - Notre Dame, Ben Thanh Market, get my bearings", districts: ["district-1"] },
      { text: "Find the trendiest café and spend hours people-watching with good coffee", districts: ["district-3", "phu-nhuan"] },
      { text: "Ask locals where THEY eat breakfast, follow their recommendations", districts: ["district-4", "binh-thanh"] },
      { text: "Sleep in, then brunch at an international spot", districts: ["district-2"] },
      { text: "Explore temples and markets, soaking in traditional culture", districts: ["district-5"] },
      { text: "Take the kids to a nice park and plan a structured day", districts: ["district-7"] }
    ]
  },
  {
    id: 2,
    question: "Your ideal Saigon accommodation is:",
    options: [
      { text: "Central hotel, walking distance to everything", districts: ["district-1"] },
      { text: "Boutique spot in a quiet, artsy neighborhood", districts: ["district-3", "phu-nhuan"] },
      { text: "Local guesthouse where I can meet real Vietnamese families", districts: ["district-4", "binh-thanh"] },
      { text: "Modern serviced apartment in an expat-friendly area", districts: ["district-2", "district-7"] },
      { text: "Traditional guesthouse near markets and temples", districts: ["district-5"] }
    ]
  },
  {
    id: 3,
    question: "When it comes to food, you:",
    options: [
      { text: "Want to try everything famous - all the hits!", districts: ["district-1"] },
      { text: "Seek out hidden cafés and experimental Vietnamese fusion", districts: ["district-3", "district-2"] },
      { text: "Follow your nose to plastic-stool street food stalls", districts: ["district-4", "binh-thanh"] },
      { text: "Appreciate good international cuisine and familiar options", districts: ["district-2", "district-7"] },
      { text: "Love traditional markets and learning about Chinese-Vietnamese fusion", districts: ["district-5"] },
      { text: "Prefer knowing exactly what I'm eating with consistent quality", districts: ["district-7", "phu-nhuan"] }
    ]
  },
  {
    id: 4,
    question: "Your social style in a new city:",
    options: [
      { text: "Join the party! Rooftop bars, backpacker scene, make instant friends", districts: ["district-1"] },
      { text: "Thoughtful conversations over coffee with creative locals", districts: ["district-3", "phu-nhuan"] },
      { text: "Genuine connections with working-class locals, language barriers be damned", districts: ["district-4", "binh-thanh"] },
      { text: "Blend into expat communities while respecting local culture", districts: ["district-2"] },
      { text: "Observe traditions, visit temples, learn from elders", districts: ["district-5"] },
      { text: "Join family-friendly activities and structured meetups", districts: ["district-7"] }
    ]
  },
  {
    id: 5,
    question: "Traffic and chaos make you feel:",
    options: [
      { text: "Alive! Bring on the motorbike rivers and sensory overload", districts: ["district-1", "district-4"] },
      { text: "Curious - I'll navigate it but appreciate quiet escapes", districts: ["district-3", "phu-nhuan"] },
      { text: "Overwhelmed - I prefer calmer, more organized spaces", districts: ["district-7", "district-2"] },
      { text: "Fascinated by the organized chaos and traditional flow", districts: ["district-5"] },
      { text: "It's all part of the experience, authenticity over comfort", districts: ["binh-thanh", "district-4"] }
    ]
  },
  {
    id: 6,
    question: "Your ideal Saturday in Saigon:",
    options: [
      { text: "Museum morning, market afternoon, rooftop bar sunset", districts: ["district-1"] },
      { text: "Café-hopping through hidden alleyways, gallery browsing, sunset at a park", districts: ["district-3", "phu-nhuan"] },
      { text: "Local market at dawn, cooking class, street food crawl at night", districts: ["district-4", "district-5"] },
      { text: "Yoga, brunch, riverside walk, wine bar evening", districts: ["district-2"] },
      { text: "Family activities, mall visit, predictable but pleasant", districts: ["district-7"] },
      { text: "Exploring up-and-coming neighborhoods where locals actually live", districts: ["binh-thanh", "phu-nhuan"] }
    ]
  },
  {
    id: 7,
    question: "What draws you to a neighborhood?",
    options: [
      { text: "Convenience, energy, being in the center of it all", districts: ["district-1"] },
      { text: "Character, creativity, independent businesses", districts: ["district-3", "binh-thanh"] },
      { text: "Authenticity, real life, no tourist performance", districts: ["district-4", "phu-nhuan"] },
      { text: "Comfort, international amenities, familiar conveniences", districts: ["district-2", "district-7"] },
      { text: "History, tradition, cultural depth", districts: ["district-5"] }
    ]
  }
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedDistricts: string[]) => {
    const newAnswers = [...answers, ...selectedDistricts];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateResult = () => {
    // Count occurrences of each district
    const districtCounts: { [key: string]: number } = {};
    answers.forEach(districtId => {
      districtCounts[districtId] = (districtCounts[districtId] || 0) + 1;
    });

    // Find the district with most points
    const topDistrictId = Object.keys(districtCounts).reduce((a, b) =>
      districtCounts[a] > districtCounts[b] ? a : b
    );

    return districtsData.districts.find(d => d.id === topDistrictId) || districtsData.districts[0];
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    const result = calculateResult();

    return (
      <div className="relative min-h-screen bg-yellow-50 py-20">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Result Header */}
              <div className="p-12 text-center bg-white border-b-4" style={{ borderColor: result.color }}>
                <div className="text-8xl mb-6">{result.emoji}</div>
                <h1 className="text-4xl font-bold mb-4 text-gray-900">You're {result.name}!</h1>
                <p className="text-2xl font-semibold mb-2" style={{ color: result.color }}>{result.nickname}</p>
                <div className="flex flex-wrap justify-center gap-3 mt-6">
                  {result.vibe.map(vibe => (
                    <span key={vibe} className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">
                      {vibe}
                    </span>
                  ))}
                </div>
              </div>

              {/* Result Content */}
              <div className="p-12">
                <p className="text-xl text-gray-700 italic leading-relaxed mb-8">
                  "{result.personality}"
                </p>

                <div className="prose prose-lg max-w-none mb-8">
                  {result.description.split('\n\n').slice(0, 2).map((para, idx) => (
                    <p key={idx} className="text-gray-700 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mb-8 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3">Best For:</h3>
                  <div className="flex flex-wrap gap-2">
                    {result.bestFor.map(item => (
                      <span key={item} className="px-3 py-1 bg-white rounded-full text-sm font-medium border border-gray-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={`/en/districts/${result.slug}`}
                    className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 hover:shadow-xl transition-all"
                  >
                    <MapPin className="w-5 h-5" />
                    Explore {result.name}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <button
                    onClick={resetQuiz}
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-all"
                  >
                    <RefreshCcw className="w-5 h-5" />
                    Take Quiz Again
                  </button>
                </div>

                <p className="text-center text-gray-500 mt-8 text-sm">
                  Don't agree? Take the quiz again or explore all {districtsData.districts.length} districts!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="relative min-h-screen bg-yellow-50 py-20">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm font-medium text-gray-700">
                {Math.round((currentQuestion / questions.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-primary h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Question Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl p-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {question.question}
              </h2>

              <div className="space-y-4">
                {question.options.map((option, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(option.districts)}
                    className="w-full text-left p-6 rounded-xl border-2 border-gray-200 hover:border-primary hover:bg-primary/5 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg text-gray-800 group-hover:text-gray-900">
                        {option.text}
                      </span>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
