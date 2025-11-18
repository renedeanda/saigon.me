'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: 'en' | 'vi') => {
    if (!pathname) return;
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  return (
    <div className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-3 py-1.5 border border-white/20">
      <Globe className="w-4 h-4 text-primary" />
      <button
        onClick={() => switchLanguage('en')}
        className={`text-sm font-medium transition-colors ${
          locale === 'en'
            ? 'text-primary'
            : 'text-white/70 hover:text-white'
        }`}
      >
        EN
      </button>
      <span className="text-white/40">|</span>
      <button
        onClick={() => switchLanguage('vi')}
        className={`text-sm font-medium transition-colors ${
          locale === 'vi'
            ? 'text-primary'
            : 'text-white/70 hover:text-white'
        }`}
      >
        VI
      </button>
    </div>
  );
}
