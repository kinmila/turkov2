import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

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
                    {chapter.topics.map((topic, topicIdx) => (
                      <li 
                        key={topicIdx} 
                        className="text-foreground/70 leading-relaxed pl-4 hover:text-primary hover:pl-6 transition-all cursor-default"
                      >
                        {topic}
                      </li>
                    ))}
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
