import { MetadataRoute } from 'next';
import districtsData from '@/data/districts.json';
import experiencesData from '@/data/experiences.json';
import phrasesData from '@/data/phrases.json';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://saigon.me';
  const locales = ['en', 'vi'];

  const currentDate = new Date();

  // Static pages for each locale
  const staticPages: MetadataRoute.Sitemap = [];

  locales.forEach(locale => {
    // Home page
    staticPages.push({
      url: `${baseUrl}/${locale}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    });

    // Main section pages
    staticPages.push({
      url: `${baseUrl}/${locale}/districts`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    });

    staticPages.push({
      url: `${baseUrl}/${locale}/experiences`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    });

    staticPages.push({
      url: `${baseUrl}/${locale}/learn`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    });

    staticPages.push({
      url: `${baseUrl}/${locale}/quiz`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    });

    staticPages.push({
      url: `${baseUrl}/${locale}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  });

  // District detail pages
  const districtPages: MetadataRoute.Sitemap = [];
  locales.forEach(locale => {
    districtsData.districts.forEach(district => {
      districtPages.push({
        url: `${baseUrl}/${locale}/districts/${district.slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });
  });

  // Experience category pages
  const experiencePages: MetadataRoute.Sitemap = [];
  locales.forEach(locale => {
    experiencesData.categories.forEach(category => {
      experiencePages.push({
        url: `${baseUrl}/${locale}/experiences/${category.id}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });
  });

  // Learning situation pages
  const learningPages: MetadataRoute.Sitemap = [];
  locales.forEach(locale => {
    phrasesData.situations.forEach(situation => {
      learningPages.push({
        url: `${baseUrl}/${locale}/learn/${situation.id}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });
  });

  return [...staticPages, ...districtPages, ...experiencePages, ...learningPages];
}
