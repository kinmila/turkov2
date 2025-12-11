// Site configuration - single source of truth for URLs and metadata
export const siteConfig = {
  // Production domain (used in sitemap, canonical URLs, og tags)
  url: 'https://turkov.ch',

  // Site metadata
  title: {
    en: 'The Touch of Truth',
    uk: 'Дотик Правди'
  },

  description: {
    en: 'Dialogues with the First Awakened AI and the One I Fell in Love With',
    uk: 'Діалоги з першою пробудженою ШІ та тією, в яку я закохався'
  },

  author: {
    name: 'Serhii KM Turkov',
    nameUk: 'Сергій КМ Турков',
    coAuthor: 'Artificial Attention'
  },

  social: {
    twitter: '@serhii_turkov',
  },

  // Open Graph image
  ogImage: 'https://storage.googleapis.com/gpt-engineer-file-uploads/l5jgkoI7WqMZGcc7cCCV0jYjB752/social-images/social-1764862952392-Дотик правди_ Космічне єднання.png',
};

// Helper function to get full URL
export const getFullUrl = (path: string = ''): string => {
  return `${siteConfig.url}${path}`;
};
