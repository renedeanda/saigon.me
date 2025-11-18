'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: `/${locale}/districts`, label: t('districts') },
    { href: `/${locale}/experiences`, label: t('experiences') },
    { href: `/${locale}/learn`, label: t('learn') },
    { href: `/${locale}/destinations`, label: t('destinations') },
    { href: `/${locale}/quiz`, label: t('quiz') },
    { href: `/${locale}/about`, label: t('about') },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2 relative z-50">
            <span className="text-2xl font-bold text-gray-900">
              Sài Gòn<span className="text-primary">.me</span>
            </span>
          </Link>

          {/* Desktop Navigation - hidden on mobile */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {links.map((link) => {
              const isActive = pathname?.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative group ${
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

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative z-50 p-2 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMenu}
            />

            {/* Slide-down Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-xl z-40 md:hidden"
            >
              <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col space-y-1">
                  {links.map((link) => {
                    const isActive = pathname?.startsWith(link.href);
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeMenu}
                        className={`px-4 py-3 rounded-lg font-medium transition-all ${
                          isActive
                            ? 'bg-primary/10 text-primary'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
