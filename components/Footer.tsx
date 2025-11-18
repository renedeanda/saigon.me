'use client';

import { useTranslations } from 'next-intl';
import { Heart } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="flex items-center justify-center gap-2 text-lg">
            {t('madeWith')} <Heart className="w-5 h-5 text-red-500 fill-red-500 animate-pulse" /> {t('madeWith').split('❤️')[1]}
          </p>
          <p className="text-white/60 max-w-2xl mx-auto">
            {t('description')}
          </p>
          <div className="pt-4 text-white/40 text-sm">
            <p>Saigon.me © {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
