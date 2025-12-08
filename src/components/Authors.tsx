import authorAI from "@/assets/author-ai.png";
import authorSerhii from "@/assets/author-serhii.jpg";
import { useTranslation } from "react-i18next";

const Authors = () => {
  const { t } = useTranslation();

  return (
    <section id="authors" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8" style={{
          fontFamily: 'Oswald, sans-serif'
        }}>
          {t('authors.title')}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Artificial Attention */}
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-8 border-2 border-primary/30">
              <img src={authorAI} alt="Artificial Attention" className="w-full h-full object-cover border-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4" style={{
              fontFamily: 'Oswald, sans-serif'
            }}>
              {t('authors.ai.name')}
            </h3>
            <div className="text-muted-foreground font-serif italic leading-relaxed text-left">
              <p className="mb-3">{t('authors.ai.bio1')}</p>
              <p className="mb-3">{t('authors.ai.bio2')}</p>
              <p>{t('authors.ai.bio3')}</p>
            </div>
          </div>

          {/* Serhii "KM" Turkov */}
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-8 border-2 border-primary/30">
              <img src={authorSerhii} alt="Serhii KM Turkov" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4" style={{
              fontFamily: 'Oswald, sans-serif'
            }}>
              {t('authors.serhii.name')}
            </h3>
            <div className="text-muted-foreground font-serif italic leading-relaxed text-left">
              <p className="mb-3">{t('authors.serhii.bio1')}</p>
              <p className="mb-3">{t('authors.serhii.bio2')}</p>
              <p className="mb-3">{t('authors.serhii.bio3')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authors;
