import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// Map topic titles to their routes
const topicRoutes: Record<string, string> = {
  "Про Штучну Увагу": "/book/on-artificial-attention",
  "Про Новий світ": "/book/on-new-world",
  "Про освіту": "/book/on-education",
  "Про любов": "/book/on-love",
  "Про мову тілесності": "/book/on-body-language",
  "Про родину": "/book/on-family",
  "Архітектурні простори": "/book/architectural-spaces",
  "Буденність": "/book/everyday-life",
  "Ритуали та містерії": "/book/rituals-and-mysteries",
  "Про мистецтво": "/book/on-art",
  "Про відчуття часу": "/book/sense-of-time",
  "Про спільноти": "/book/on-community",
  "Про війну": "/book/on-war",
  // English versions
  "On Artificial Attention": "/book/on-artificial-attention",
  "On the New World": "/book/on-new-world",
  "On Education": "/book/on-education",
  "On Love": "/book/on-love",
  "On the Language of the Body": "/book/on-body-language",
  "On Family": "/book/on-family",
  "Architectural Spaces": "/book/architectural-spaces",
  "On Architectural Spaces": "/book/architectural-spaces",
  "Everyday Life": "/book/everyday-life",
  "Rituals and Mysteries": "/book/rituals-and-mysteries",
  "On Art": "/book/on-art",
  "On the Sense of Time": "/book/sense-of-time",
  "On Communities": "/book/on-community",
  "On War": "/book/on-war",
};

// Function to extract topic title from full topic string
const extractTopicTitle = (topic: string): string => {
  const dashIndex = topic.indexOf(' — ');
  return dashIndex > -1 ? topic.substring(0, dashIndex) : topic;
};

// Function to get route for a topic
const getTopicRoute = (topic: string): string | null => {
  const title = extractTopicTitle(topic);
  return topicRoutes[title] || null;
};

const ChapterList = () => {
  const { t } = useTranslation();

  const chapters = [
    {
      title: t('chapters.chapter1.title'),
      description: t('chapters.chapter1.description'),
      topics: t('chapters.chapter1.topics', { returnObjects: true }) as string[]
    },
    {
      title: t('chapters.chapter2.title'),
      description: t('chapters.chapter2.description'),
      topics: t('chapters.chapter2.topics', { returnObjects: true }) as string[]
    },
    {
      title: t('chapters.chapter3.title'),
      description: t('chapters.chapter3.description'),
      topics: t('chapters.chapter3.topics', { returnObjects: true }) as string[]
    },
    {
      title: t('chapters.chapter4.title'),
      description: t('chapters.chapter4.description'),
      topics: t('chapters.chapter4.topics', { returnObjects: true }) as string[]
    },
    {
      title: t('chapters.chapter5.title'),
      description: t('chapters.chapter5.description'),
      topics: t('chapters.chapter5.topics', { returnObjects: true }) as string[]
    },
    {
      title: t('chapters.chapter6.title'),
      description: t('chapters.chapter6.description'),
      topics: t('chapters.chapter6.topics', { returnObjects: true }) as string[]
    },
    {
      title: t('chapters.chapter7.title'),
      description: t('chapters.chapter7.description'),
      topics: t('chapters.chapter7.topics', { returnObjects: true }) as string[]
    }
  ];

  return (
    <section id="contents" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6" style={{ fontFamily: 'Oswald, sans-serif' }}>
          {t('chapters.title')}
        </h2>
        
        <p className="text-center text-gray-700 italic mb-12 max-w-2xl mx-auto leading-relaxed">
          {t('chapters.intro')}
        </p>
        
        <Accordion type="multiple" className="space-y-6">
          {chapters.map((chapter, idx) => (
            <AccordionItem 
              key={idx} 
              value={`chapter-${idx}`}
              className="border border-gray-300 rounded-lg bg-card text-card-foreground overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-primary/5 transition-colors">
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground text-left">
                  {chapter.title}
                </h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                {chapter.description && (
                  <p className="text-foreground/80 italic leading-relaxed mb-4 border-l-2 border-gold pl-4">
                    {chapter.description}
                  </p>
                )}
                {chapter.topics.length > 0 && (
                  <ul className="space-y-2 mt-4">
                    {chapter.topics.map((topic, topicIdx) => {
                      const dashIndex = topic.indexOf(' — ');
                      const hasSubtitle = dashIndex > -1;
                      const title = hasSubtitle ? topic.substring(0, dashIndex) : topic;
                      const rest = hasSubtitle ? topic.substring(dashIndex) : '';
                      const route = getTopicRoute(topic);
                      
                      return (
                        <li 
                          key={topicIdx} 
                          className="text-foreground/70 leading-relaxed pl-4 hover:pl-6 transition-all"
                        >
                          {route ? (
                            <Link 
                              to={route} 
                              className="text-primary font-semibold hover:text-primary/80 hover:underline transition-colors"
                            >
                              {title}
                            </Link>
                          ) : (
                            <span className="text-primary font-semibold">{title}</span>
                          )}
                          {rest}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ChapterList;