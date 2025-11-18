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
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 border border-gray-200">
      <Globe className="w-4 h-4 text-gray-600" />
      <button
        onClick={() => switchLanguage('en')}
        className={`text-sm font-medium transition-colors px-2 py-1 rounded ${
          locale === 'en'
            ? 'bg-primary text-white'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        EN
      </button>
      <span className="text-gray-400">|</span>
      <button
        onClick={() => switchLanguage('vi')}
        className={`text-sm font-medium transition-colors px-2 py-1 rounded ${
          locale === 'vi'
            ? 'bg-primary text-white'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        VI
      </button>
    </div>
  );
}
