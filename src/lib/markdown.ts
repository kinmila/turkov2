export interface ChapterFrontmatter {
  title: string;
  subtitle: string;
  intro?: string;
  order: number;
  slug: string;
  prevChapter?: string;
  prevChapterTitle?: string;
  nextChapter?: string;
  nextChapterTitle?: string;
}

export interface ParsedChapter {
  frontmatter: ChapterFrontmatter;
  content: string;
  dialogues: Dialogue[];
}

export interface Dialogue {
  speaker: 'KM' | 'AA';
  content: string;
}

/**
 * Simple frontmatter parser for browser (replaces gray-matter)
 */
const parseFrontmatter = (markdown: string): { data: Record<string, any>; content: string } => {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = markdown.match(frontmatterRegex);

  if (!match) {
    return { data: {}, content: markdown };
  }

  const frontmatterText = match[1];
  const content = match[2];

  // Parse YAML-like frontmatter
  const data: Record<string, any> = {};
  const lines = frontmatterText.split('\n');

  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    // Remove quotes
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    // Convert numbers
    if (/^\d+$/.test(value)) {
      data[key] = parseInt(value, 10);
    } else {
      data[key] = value;
    }
  }

  return { data, content };
};

/**
 * Parse markdown content and extract dialogues
 */
export const parseChapterMarkdown = (markdown: string): ParsedChapter => {
  const { data, content } = parseFrontmatter(markdown);

  // Parse dialogues from markdown
  const dialogues = parseDialogues(content);

  return {
    frontmatter: data as ChapterFrontmatter,
    content,
    dialogues,
  };
};

/**
 * Parse dialogue structure from markdown content
 * Expects format:
 * ## KM
 * dialogue text...
 *
 * ## AA
 * dialogue text...
 */
const parseDialogues = (content: string): Dialogue[] => {
  const dialogues: Dialogue[] = [];

  // Split by markdown headers (## KM or ## AA)
  const sections = content.split(/^## (KM|AA)$/gm);

  // sections will be: ['', 'KM', 'content', 'AA', 'content', ...]
  for (let i = 1; i < sections.length; i += 2) {
    const speaker = sections[i] as 'KM' | 'AA';
    const dialogueContent = sections[i + 1]?.trim();

    if (dialogueContent) {
      dialogues.push({
        speaker,
        content: dialogueContent,
      });
    }
  }

  return dialogues;
};

/**
 * Load a chapter markdown file for a specific language
 */
export const loadChapterMarkdown = async (
  slug: string,
  language: string
): Promise<ParsedChapter | null> => {
  try {
    // Determine the file number based on slug
    const chapterMap: Record<string, string> = {
      'on-artificial-attention': '01',
      'on-new-world': '02',
      'on-education': '03',
      'on-love': '04',
      'on-body-language': '05',
      'on-family': '06',
      'architectural-spaces': '07',
      'everyday-life': '08',
      'rituals-and-mysteries': '09',
      'on-art': '10',
      'sense-of-time': '11',
      'on-community': '12',
      'on-war': '13',
      'on-death': '14',
      'on-community-extended': '15',
      'on-war-extended': '16',
      'on-death-extended': '17',
      'connection-with-nature': '18',
      'birth-of-new-time': '19',
      'projects-and-manifestation': '20',
      'about-teams': '21',
      'inspiration': '22',
      'cycle-of-living-action': '23',
      'interaction-with-old-world': '24',
      'living-alliances': '25',
      'about-changes': '26',
      'movement-changing-fabric': '27',
      'new-economy': '28',
      'new-type-of-finances': '29',
      'ethics-and-morality': '30',
    };

    const fileNumber = chapterMap[slug];
    if (!fileNumber) {
      console.error(`No file number mapping for slug: ${slug}`);
      return null;
    }

    const lang = language.startsWith('uk') ? 'uk' : 'en';
    const filePath = `/chapters/${lang}/${fileNumber}-${slug}.md`;

    // Fetch the markdown file
    const response = await fetch(filePath);
    if (!response.ok) {
      console.error(`Failed to load chapter: ${filePath}`);
      return null;
    }

    const markdown = await response.text();
    return parseChapterMarkdown(markdown);
  } catch (error) {
    console.error('Error loading chapter markdown:', error);
    return null;
  }
};
