import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

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

const Book = () => {
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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-28 pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 
            className="text-3xl md:text-5xl font-bold text-center text-foreground mb-6"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            {t('chapters.title')}
          </h1>
          
          <p className="text-center text-muted-foreground italic mb-12 max-w-2xl mx-auto leading-relaxed font-lora">
            {t('chapters.intro')}
          </p>
          
          <div className="space-y-10">
            {chapters.map((chapter, idx) => (
              <div 
                key={idx} 
                className="border border-border/30 rounded-lg bg-card/50 overflow-hidden"
              >
                <div className="px-6 py-5 border-b border-border/20">
                  <h2 className="text-xl md:text-2xl font-serif font-semibold text-foreground">
                    {chapter.title}
                  </h2>
                </div>
                
                <div className="px-6 py-6">
                  {chapter.description && (
                    <p className="text-foreground/80 italic leading-relaxed mb-5 border-l-2 border-primary pl-4 font-lora">
                      {chapter.description}
                    </p>
                  )}
                  
                  {chapter.topics.length > 0 && (
                    <ul className="space-y-3">
                      {chapter.topics.map((topic, topicIdx) => {
                        const dashIndex = topic.indexOf(' — ');
                        const hasSubtitle = dashIndex > -1;
                        const title = hasSubtitle ? topic.substring(0, dashIndex) : topic;
                        const rest = hasSubtitle ? topic.substring(dashIndex) : '';
                        const route = getTopicRoute(topic);
                        
                        return (
                          <li 
                            key={topicIdx} 
                            className="text-foreground/70 leading-relaxed pl-4 hover:pl-6 transition-all font-lora"
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
                            {rest && <span className="text-muted-foreground">{rest}</span>}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Book;