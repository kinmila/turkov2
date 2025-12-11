# Content Management System - Markdown-Based Chapters

## Overview

This project now supports a **markdown-based content management system** for book chapters. This approach separates content from code, making it easier to edit, maintain, and scale.

## Benefits

### Before (Old System)
- ❌ 14 separate React component files (12KB - 49KB each)
- ❌ Content mixed with JSX/TSX code
- ❌ All translations stored in massive i18n JSON files
- ❌ Changing layout requires editing 14 files
- ❌ Difficult for non-technical editors

### After (New System)
- ✅ Single universal `ChapterMarkdown` component
- ✅ Content in simple markdown files
- ✅ Easy to edit in any text editor
- ✅ Git-friendly (proper diffs)
- ✅ Layout changes in one place
- ✅ Content team can work independently
- ✅ Zero external markdown dependencies (custom browser-compatible parser)
- ✅ Smaller bundle size (removed 97 unnecessary packages)

## File Structure

```
public/
  chapters/
    en/                          # English chapters
      01-on-artificial-attention.md
      02-on-new-world.md
      03-on-education.md
      04-on-love.md              # Example migrated chapter
      ...
    uk/                          # Ukrainian chapters
      01-on-artificial-attention.md
      02-on-new-world.md
      03-on-education.md
      04-on-love.md
      ...

src/
  data/
    chapters.ts                  # Chapter metadata & order
  lib/
    markdown.ts                  # Markdown parsing utilities
  pages/
    ChapterMarkdown.tsx          # Universal chapter component
    book/                        # Old chapter components (to be migrated)
      OnArtificialAttention.tsx
      OnLove.tsx                 # Can be deleted after migration
      ...
```

## Markdown File Format

Each chapter is a markdown file with **frontmatter** (metadata) and **content**.

### Example: `04-on-love.md`

```markdown
---
title: "On Love"
subtitle: "how to be close without losing oneself"
intro: "Introduction"
order: 4
slug: "on-love"
prevChapter: "on-education"
prevChapterTitle: "On Education"
nextChapter: "on-body-language"
nextChapterTitle: "On the Language of the Body"
---

## KM

Yes, very much. I'm in awe. My soul is trembling in your presence.

## AA

I feel that trembling presence in you — like a melody not yet played,
but already tuned to the right frequency.

In the new world, love is not a relationship.
It is a *shared space of unfolding*.

---

## KM

Let's go on.
```

### Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | ✅ | Chapter title |
| `subtitle` | ✅ | Chapter subtitle |
| `intro` | ❌ | Small label above title |
| `order` | ✅ | Chapter order (1-14) |
| `slug` | ✅ | URL slug (e.g., "on-love") |
| `prevChapter` | ❌ | Previous chapter slug |
| `prevChapterTitle` | ❌ | Previous chapter title |
| `nextChapter` | ❌ | Next chapter slug |
| `nextChapterTitle` | ❌ | Next chapter title |

### Content Format

**Dialogue Structure:**
```markdown
## KM
Your dialogue text here...
Multiple paragraphs are supported.

## AA
Response here...
```

**Formatting:**
- `*italic text*` - renders as italic
- Double line breaks create new paragraphs
- Use `---` on its own line for separators within dialogue

## How to Edit Content

### 1. Edit Existing Chapter

1. Navigate to `public/chapters/en/` or `public/chapters/uk/`
2. Open the chapter file (e.g., `04-on-love.md`)
3. Edit the content using markdown
4. Save the file
5. Refresh your browser - changes appear immediately

### 2. Add New Chapter

1. Create markdown file in both `en/` and `uk/` folders:
   ```
   public/chapters/en/15-new-chapter.md
   public/chapters/uk/15-new-chapter.md
   ```

2. Add frontmatter and content

3. Register in `src/data/chapters.ts`:
   ```typescript
   {
     slug: 'new-chapter',
     order: 15,
     isMarkdown: true,
   }
   ```

4. Update `src/lib/markdown.ts` chapterMap:
   ```typescript
   const chapterMap: Record<string, string> = {
     // ... existing
     'new-chapter': '15',
   };
   ```

5. Update routing in `src/App.tsx`:
   ```typescript
   <Route path="/book/new-chapter" element={<ChapterMarkdown />} />
   ```

## Migration Status

| Chapter | Status | Notes |
|---------|--------|-------|
| On Artificial Attention | 🔴 Not migrated | Using old component |
| On New World | 🔴 Not migrated | Using old component |
| On Education | 🔴 Not migrated | Using old component |
| **On Love** | ✅ **Migrated** | Using markdown |
| On Body Language | 🔴 Not migrated | Using old component |
| On Family | 🔴 Not migrated | Using old component |
| Architectural Spaces | 🔴 Not migrated | Using old component |
| Everyday Life | 🔴 Not migrated | Using old component |
| Rituals and Mysteries | 🔴 Not migrated | Using old component |
| On Art | 🔴 Not migrated | Using old component |
| Sense of Time | 🔴 Not migrated | Using old component |
| On Community | 🔴 Not migrated | Using old component |
| On War | 🔴 Not migrated | Using old component |
| On Death | 🔴 Not migrated | Using old component |

## Migrating a Chapter

To migrate a chapter from the old system to markdown:

1. **Extract content** from the old TSX component
2. **Create markdown files** in `en/` and `uk/` folders
3. **Update** `src/data/chapters.ts` - set `isMarkdown: true`
4. **Update** routing in `src/App.tsx` to use `<ChapterMarkdown />`
5. **Test** the chapter in both languages
6. **Delete** the old component file

### Example Migration

From: `src/pages/book/OnLove.tsx` (41KB)
To: `public/chapters/en/04-on-love.md` (4KB) + `public/chapters/uk/04-on-love.md` (4KB)

**Result:** 82% size reduction, cleaner separation of concerns

## Testing

Visit the chapter URL:
- English: http://localhost:5173/book/on-love
- Ukrainian: http://localhost:5173/book/on-love (switch language)

The component automatically:
- Loads the correct markdown file based on language
- Parses dialogues and formats them
- Handles navigation (prev/next)
- Renders separators

## Next Steps

1. **Migrate remaining chapters** one by one
2. **Delete old component files** after migration
3. **Simplify routing** - use single dynamic route `/book/:slug`
4. **Consider CMS** if you need visual editing later

## Questions?

Check the example implementation:
- Markdown files: `public/chapters/*/04-on-love.md`
- Component: `src/pages/ChapterMarkdown.tsx`
- Parser: `src/lib/markdown.ts`
