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
    twitter: {
      card: 'summary_large_image',
      title: `Learn Vietnamese - ${situationName}`,
      description: description.substring(0, 160) + '...',
      images: ['/og-image.png'],
    },
  };
}

export function getDistrictsPageMetadata(): Metadata {
  return {
    title: 'All Districts - Explore Saigon',
    description: '8 unique districts with distinct personalities. From the colonial heart of District 1 to the creative vibes of District 3. Find your perfect Saigon neighborhood.',
    keywords: ['Saigon districts', 'HCMC districts', 'Saigon neighborhoods', 'Vietnam travel', 'District 1', 'District 3', 'Saigon guide'],
    openGraph: {
      title: 'All Districts - Explore Saigon | Saigon.me',
      description: '8 unique districts with distinct personalities. From District 1 to creative District 3. Find your perfect Saigon neighborhood.',
      images: ['/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'All Districts - Explore Saigon',
      description: '8 unique districts with distinct personalities. Find your perfect Saigon neighborhood.',
      images: ['/og-image.png'],
    },
  };
}

export function getExperiencesPageMetadata(): Metadata {
  return {
    title: 'Experiences - 100+ Authentic Saigon Moments',
    description: 'Discover 100+ authentic Saigon experiences. From morning coffee rituals to hidden alleyway adventures. Live like a local, not a tourist.',
    keywords: ['Saigon experiences', 'things to do in Saigon', 'Saigon activities', 'Vietnam travel', 'HCMC activities', 'authentic Saigon'],
    openGraph: {
      title: 'Experiences - 100+ Authentic Saigon Moments | Saigon.me',
      description: 'Discover 100+ authentic Saigon experiences. From morning rituals to alleyway adventures. Live like a local.',
      images: ['/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Experiences - 100+ Authentic Saigon Moments',
      description: 'Discover 100+ authentic Saigon experiences. Live like a local, not a tourist.',
      images: ['/og-image.png'],
    },
  };
}

export function getLearnPageMetadata(): Metadata {
  return {
    title: 'Learn Vietnamese - Connect Through Language',
    description: 'Learn 85+ essential Vietnamese phrases for Saigon. From ordering coffee to making friends. Master greetings, restaurant phrases, and cultural tips with audio pronunciation.',
    keywords: ['learn Vietnamese', 'Vietnamese phrases', 'Saigon language', 'Vietnamese for travelers', 'Vietnamese pronunciation', 'language learning'],
    openGraph: {
      title: 'Learn Vietnamese - Connect Through Language | Saigon.me',
      description: 'Learn 85+ essential Vietnamese phrases for Saigon. From ordering coffee to making friends. Audio pronunciation included.',
      images: ['/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Learn Vietnamese - Connect Through Language',
      description: 'Learn 85+ essential Vietnamese phrases for Saigon with audio pronunciation.',
      images: ['/og-image.png'],
    },
  };
}

export function getQuizMetadata(): Metadata {
  return {
    title: 'District Quiz - Find Your Saigon Neighborhood',
    description: 'Take our personality quiz to discover which Saigon district matches your vibe. Are you a District 1 explorer or a District 3 creative? Find your perfect neighborhood match.',
    keywords: ['Saigon quiz', 'Saigon district quiz', 'where to stay in Saigon', 'Saigon neighborhoods', 'HCMC quiz'],
    openGraph: {
      title: 'District Quiz - Find Your Saigon Neighborhood | Saigon.me',
      description: 'Take our quiz to discover which Saigon district matches your personality. Find your perfect neighborhood.',
      images: ['/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'District Quiz - Find Your Saigon Neighborhood',
      description: 'Discover which Saigon district matches your personality.',
      images: ['/og-image.png'],
    },
  };
}

export function getAboutMetadata(): Metadata {
  return {
    title: 'About - The Story Behind Saigon.me',
    description: 'Learn why we call it Saigon, not just HCMC. Understand the history, the name, and the soul of this incredible city. A love letter to Sài Gòn.',
    keywords: ['Saigon vs HCMC', 'Saigon history', 'Ho Chi Minh City', 'Vietnam culture', 'Saigon name'],
    openGraph: {
      title: 'About - The Story Behind Saigon.me',
      description: 'Learn why we call it Saigon, not just HCMC. Understand the history and soul of this incredible city.',
      images: ['/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About - The Story Behind Saigon.me',
      description: 'Learn why we call it Saigon, not just HCMC. A love letter to Sài Gòn.',
      images: ['/og-image.png'],
    },
  };
}
