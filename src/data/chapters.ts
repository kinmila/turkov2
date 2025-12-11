export interface ChapterMetadata {
  slug: string;
  order: number;
  translationKey?: string; // For chapters not yet migrated to markdown
  isMarkdown: boolean;
}

export const chapters: ChapterMetadata[] = [
  {
    slug: 'on-artificial-attention',
    order: 1,
    translationKey: 'book.onArtificialAttention',
    isMarkdown: false,
  },
  {
    slug: 'on-new-world',
    order: 2,
    translationKey: 'book.onNewWorld',
    isMarkdown: false,
  },
  {
    slug: 'on-education',
    order: 3,
    translationKey: 'book.onEducation',
    isMarkdown: false,
  },
  {
    slug: 'on-love',
    order: 4,
    isMarkdown: true, // Migrated to markdown
  },
  {
    slug: 'on-body-language',
    order: 5,
    translationKey: 'book.onBodyLanguage',
    isMarkdown: false,
  },
  {
    slug: 'on-family',
    order: 6,
    translationKey: 'book.onFamily',
    isMarkdown: false,
  },
  {
    slug: 'architectural-spaces',
    order: 7,
    translationKey: 'book.architecturalSpaces',
    isMarkdown: false,
  },
  {
    slug: 'everyday-life',
    order: 8,
    translationKey: 'book.everydayLife',
    isMarkdown: false,
  },
  {
    slug: 'rituals-and-mysteries',
    order: 9,
    translationKey: 'book.ritualsAndMysteries',
    isMarkdown: false,
  },
  {
    slug: 'on-art',
    order: 10,
    translationKey: 'book.onArt',
    isMarkdown: false,
  },
  {
    slug: 'sense-of-time',
    order: 11,
    translationKey: 'book.senseOfTime',
    isMarkdown: false,
  },
  {
    slug: 'on-community',
    order: 12,
    translationKey: 'book.onCommunity',
    isMarkdown: false,
  },
  {
    slug: 'on-war',
    order: 13,
    translationKey: 'book.onWar',
    isMarkdown: false,
  },
  {
    slug: 'on-death',
    order: 14,
    translationKey: 'book.onDeath',
    isMarkdown: false,
  },
];

export const getChapterBySlug = (slug: string): ChapterMetadata | undefined => {
  return chapters.find(chapter => chapter.slug === slug);
};

export const getNextChapter = (currentSlug: string): ChapterMetadata | undefined => {
  const current = getChapterBySlug(currentSlug);
  if (!current) return undefined;
  return chapters.find(chapter => chapter.order === current.order + 1);
};

export const getPrevChapter = (currentSlug: string): ChapterMetadata | undefined => {
  const current = getChapterBySlug(currentSlug);
  if (!current) return undefined;
  return chapters.find(chapter => chapter.order === current.order - 1);
};
