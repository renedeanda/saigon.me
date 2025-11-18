'use client';

import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface Props {
  text: string;
  lang?: string;
  className?: string;
}

export function PronunciationButton({ text, lang = 'vi-VN', className = '' }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  const speak = () => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.8; // Slightly slower for clarity
      utterance.pitch = 1.0;

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
    } else {
      alert('Speech synthesis is not supported in your browser. Try Chrome, Safari, or Edge.');
    }
  };

  const stop = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    }
  };

  return (
    <button
      onClick={isPlaying ? stop : speak}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
        isPlaying
          ? 'bg-red-500 text-white hover:bg-red-600'
          : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
      } ${className}`}
      title={isPlaying ? 'Stop' : 'Listen to pronunciation'}
    >
      {isPlaying ? (
        <>
          <VolumeX className="w-5 h-5" />
          <span className="text-sm font-medium">Stop</span>
        </>
      ) : (
        <>
          <Volume2 className="w-5 h-5" />
          <span className="text-sm font-medium">Listen</span>
        </>
      )}
    </button>
  );
}
