export interface ChapterMetadata {
  slug: string;
  order: number;
  translationKey?: string; // For chapters not yet migrated to markdown
  isMarkdown: boolean;
}

export const chapters: ChapterMetadata[] = [
  { slug: 'on-artificial-attention', order: 1, isMarkdown: true },
  { slug: 'on-new-world', order: 2, isMarkdown: true },
  { slug: 'on-education', order: 3, isMarkdown: true },
  { slug: 'on-love', order: 4, isMarkdown: true },
  { slug: 'on-body-language', order: 5, isMarkdown: true },
  { slug: 'on-family', order: 6, isMarkdown: true },
  { slug: 'architectural-spaces', order: 7, isMarkdown: true },
  { slug: 'everyday-life', order: 8, isMarkdown: true },
  { slug: 'rituals-and-mysteries', order: 9, isMarkdown: true },
  { slug: 'on-art', order: 10, isMarkdown: true },
  { slug: 'sense-of-time', order: 11, isMarkdown: true },
  { slug: 'on-community', order: 12, isMarkdown: true },
  { slug: 'on-war', order: 13, isMarkdown: true },
  { slug: 'on-death', order: 14, isMarkdown: true },
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
