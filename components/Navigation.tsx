'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export function Navigation() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const pathname = usePathname();

  const links = [
    { href: `/${locale}/districts`, label: t('districts') },
    { href: `/${locale}/experiences`, label: t('experiences') },
    { href: `/${locale}/learn`, label: t('learn') },
    { href: `/${locale}/quiz`, label: t('quiz') },
    { href: `/${locale}/about`, label: t('about') },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">
              Sài Gòn<span className="text-primary">.me</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-4 lg:space-x-8">
            {links.map((link) => {
              const isActive = pathname?.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs lg:text-sm font-medium transition-colors relative group ${
                    isActive ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
