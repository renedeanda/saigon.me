import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  title: {
    default: 'Saigon.me - Discover the Soul of Sài Gòn',
    template: '%s | Saigon.me'
  },
  description: 'Explore Saigon\'s 8 districts with unique personalities, discover 100 authentic experiences, and learn Vietnamese. Your complete guide to the soul of Sài Gòn.',
  keywords: ['Saigon', 'Ho Chi Minh City', 'Vietnam travel', 'Saigon districts', 'Vietnamese language', 'travel guide', 'HCMC', 'Vietnam tourism'],
  authors: [{ name: 'Saigon.me' }],
  creator: 'Saigon.me',
  publisher: 'Saigon.me',
  metadataBase: new URL('https://saigon.me'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'vi': '/vi',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['vi_VN'],
    url: 'https://saigon.me',
    title: 'Saigon.me - Discover the Soul of Sài Gòn',
    description: 'Explore Saigon\'s 8 districts, discover 100 authentic experiences, and learn Vietnamese. Your complete guide to the soul of Sài Gòn.',
    siteName: 'Saigon.me',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Saigon.me - Discover the Soul of Sài Gòn',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saigon.me - Discover the Soul of Sài Gòn',
    description: 'Explore Saigon\'s 8 districts, discover 100 authentic experiences, and learn Vietnamese.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export function getDistrictMetadata(districtName: string, nickname: string, description: string): Metadata {
  return {
    title: `${districtName} - ${nickname}`,
    description: description.substring(0, 160) + '...',
    openGraph: {
      title: `${districtName} - ${nickname} | Saigon.me`,
      description: description.substring(0, 160) + '...',
      images: ['/og-image.png'],
    },
  };
}

export function getExperienceMetadata(categoryName: string, description: string): Metadata {
  return {
    title: categoryName,
    description: description.substring(0, 160) + '...',
    openGraph: {
      title: `${categoryName} | Saigon.me`,
      description: description.substring(0, 160) + '...',
      images: ['/og-image.png'],
    },
  };
}

export function getLearnMetadata(situationName: string, description: string): Metadata {
  return {
    title: `Learn Vietnamese - ${situationName}`,
    description: description.substring(0, 160) + '...',
    openGraph: {
      title: `Learn Vietnamese - ${situationName} | Saigon.me`,
      description: description.substring(0, 160) + '...',
      images: ['/og-image.png'],
    },
  };
}
