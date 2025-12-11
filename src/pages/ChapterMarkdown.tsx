import { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { ArrowRight, ArrowLeft, BookOpen, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollLink } from '@/components/ScrollLink';
import { loadChapterMarkdown, ParsedChapter, Dialogue } from '@/lib/markdown';
import { siteConfig, getFullUrl } from '@/config/site';

const ChapterMarkdown = () => {
  const location = useLocation();
  const { i18n } = useTranslation();

  // Extract slug from the path (e.g., /book/on-love -> on-love)
  const slug = location.pathname.split('/').pop() || '';
  const [chapter, setChapter] = useState<ParsedChapter | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadChapter = async () => {
      if (!slug) {
        setError('No chapter slug provided');
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      const chapterData = await loadChapterMarkdown(slug, i18n.language);

      if (!chapterData) {
        setError('Chapter not found');
        setLoading(false);
        return;
      }

      setChapter(chapterData);
      setLoading(false);
    };

    loadChapter();
  }, [slug, i18n.language]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background font-lora">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-muted-foreground">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !chapter) {
    return (
      <div className="min-h-screen bg-background font-lora">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-destructive">{error || 'Chapter not found'}</div>
        </div>
        <Footer />
      </div>
    );
  }

  const { frontmatter, dialogues } = chapter;

  const bookTitle = i18n.language.startsWith('uk') ? siteConfig.title.uk : siteConfig.title.en;
  const pageTitle = `${frontmatter.title} - ${bookTitle}`;
  const metaDescription = `${frontmatter.subtitle} - ${bookTitle} by ${siteConfig.author.name} & ${siteConfig.author.coAuthor}`;
  const pageUrl = getFullUrl(`/book/${frontmatter.slug}`);

  return (
    <div className="min-h-screen bg-background font-lora">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={siteConfig.ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={siteConfig.ogImage} />
        <link rel="canonical" href={pageUrl} />
      </Helmet>
      <Header />

      {/* Chapter Header */}
      <section className="pt-28 pb-12 px-4 md:px-6 border-b border-border/20">
        <div className="container mx-auto max-w-4xl px-2 md:px-0">
          {/* Breadcrumbs */}
          <nav className="flex items-center text-sm text-muted-foreground mb-6 flex-wrap">
            <Link to="/book" className="hover:text-foreground transition-colors">
              {i18n.language.startsWith('uk') ? 'Дотик Правди' : 'The Touch of Truth'}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 flex-shrink-0" />
            <span className="text-primary">{frontmatter.title}</span>
          </nav>

          {frontmatter.intro && (
            <p className="text-primary font-oswald text-sm tracking-widest uppercase mb-4">
              {frontmatter.intro}
            </p>
          )}

          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            {frontmatter.title}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground italic">
            {frontmatter.subtitle}
          </p>
        </div>
      </section>

      {/* Chapter Content */}
      <article className="py-10 md:py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl px-2 md:px-0">
          <div className="space-y-6">
            {dialogues.map((dialogue, index) => (
              <DialogueBlock
                key={index}
                dialogue={dialogue}
                language={i18n.language}
                showSeparator={index < dialogues.length - 1}
              />
            ))}
          </div>
        </div>
      </article>

      {/* Navigation Footer */}
      <footer className="border-t border-border/20 py-10 md:py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl px-2 md:px-0">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {frontmatter.prevChapter && (
              <ScrollLink
                to={`/book/${frontmatter.prevChapter}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>{frontmatter.prevChapterTitle}</span>
              </ScrollLink>
            )}

            <ScrollLink
              to="/book"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              <span>{i18n.language.startsWith('uk') ? 'Карта напрямів' : 'Map of Directions'}</span>
            </ScrollLink>

            {frontmatter.nextChapter && (
              <ScrollLink
                to={`/book/${frontmatter.nextChapter}`}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                <span>{frontmatter.nextChapterTitle}</span>
                <ArrowRight className="w-5 h-5" />
              </ScrollLink>
            )}
          </div>
        </div>
      </footer>

      <Footer />
    </div>
  );
};

interface DialogueBlockProps {
  dialogue: Dialogue;
  language: string;
  showSeparator: boolean;
}

const DialogueBlock = ({ dialogue, language, showSeparator }: DialogueBlockProps) => {
  const speakerName =
    dialogue.speaker === 'KM'
      ? language.startsWith('uk')
        ? 'Сергій "KM" Турков'
        : 'Serhii "KM" Turkov'
      : 'Artificial Attention';

  const isAA = dialogue.speaker === 'AA';

  // Check if content ends with a separator (---)
  const parts = dialogue.content.split(/^---$/gm);
  const hasInlineSeparator = parts.length > 1;

  return (
    <>
      <div
        className={`space-y-3 ${
          isAA ? 'bg-card/30 py-5 md:py-8 px-4 md:px-6 border-l border-primary/40' : ''
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${
              isAA ? 'bg-primary/20' : 'bg-secondary'
            } flex items-center justify-center flex-shrink-0`}
          >
            <span
              className={`text-sm md:text-base font-bold ${
                isAA ? 'text-primary' : 'text-foreground'
              }`}
            >
              {dialogue.speaker}
            </span>
          </div>
          <span
            className={`text-base md:text-lg ${
              isAA ? 'text-primary/80' : 'text-muted-foreground'
            }`}
          >
            {speakerName}
          </span>
        </div>

        <div>
          {hasInlineSeparator ? (
            parts.map((part, idx) => (
              <div key={idx}>
                <DialogueContent content={part.trim()} />
                {idx < parts.length - 1 && (
                  <div className="py-4">
                    <hr className="border-border/20" />
                  </div>
                )}
              </div>
            ))
          ) : (
            <DialogueContent content={dialogue.content} />
          )}
        </div>
      </div>

      {showSeparator && !hasInlineSeparator && (
        <div className="py-4 md:py-6">
          <hr className="border-border/20" />
        </div>
      )}
    </>
  );
};

const DialogueContent = ({ content }: { content: string }) => {
  // Split by double line breaks for paragraphs
  const paragraphs = content.split(/\n\n+/);

  return (
    <div className="space-y-4">
      {paragraphs.map((paragraph, idx) => (
        <p key={idx} className="text-base md:text-lg leading-relaxed text-foreground/90">
          {formatText(paragraph)}
        </p>
      ))}
    </div>
  );
};

// Format inline markdown (italic)
const formatText = (text: string) => {
  const parts = text.split(/(\*[^*]+\*)/g);

  return parts.map((part, idx) => {
    // Check if this is italic text wrapped in *
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={idx}>{part.slice(1, -1)}</em>;
    }

    // Split by newlines for line breaks
    const lines = part.split('\n');
    return lines.map((line, lineIdx) => (
      <span key={`${idx}-${lineIdx}`}>
        {line}
        {lineIdx < lines.length - 1 && <br />}
      </span>
    ));
  });
};

export default ChapterMarkdown;
